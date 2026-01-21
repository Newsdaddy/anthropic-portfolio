import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, Users, BarChart3, TrendingUp, Clock, RefreshCw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface AnalyticsData {
  visitors: { total: number; daily: { date: string; value: number }[] };
  pageviews: { total: number; daily: { date: string; value: number }[] };
  bounceRate: number;
  avgSessionDuration: number;
  startDate: string;
  endDate: string;
}

const AdminDashboard = () => {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/', { replace: true });
    }
  }, [isAdmin, navigate]);

  const fetchAnalytics = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('get-analytics');
      if (error) {
        console.error('Analytics error:', error);
      } else {
        setAnalytics(data);
      }
    } catch (err) {
      console.error('Failed to fetch analytics:', err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isAdmin) {
      fetchAnalytics();
    }
  }, [isAdmin]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAdmin) {
    return null;
  }

  const totalVisitors = analytics?.visitors.total ?? 0;
  const totalPageviews = analytics?.pageviews.total ?? 0;

  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-4xl px-4 sm:px-6 md:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            관리자 대시보드
          </h1>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={fetchAnalytics}
              disabled={isLoading}
              className="h-9 w-9"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              로그아웃
            </Button>
          </div>
        </div>

        {/* Date Range */}
        {analytics && (
          <p className="text-sm text-muted-foreground mb-6">
            {analytics.startDate} ~ {analytics.endDate} (최근 7일)
          </p>
        )}

        {/* Dashboard Cards */}
        <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 mb-8">
          <DashboardCard
            icon={<Users className="w-5 h-5" />}
            title="방문자"
            value={isLoading ? '...' : totalVisitors.toLocaleString()}
            trend={null}
          />
          <DashboardCard
            icon={<BarChart3 className="w-5 h-5" />}
            title="페이지뷰"
            value={isLoading ? '...' : totalPageviews.toLocaleString()}
            trend={null}
          />
          <DashboardCard
            icon={<TrendingUp className="w-5 h-5" />}
            title="이탈률"
            value={isLoading ? '...' : `${analytics?.bounceRate ?? 0}%`}
            trend={null}
          />
          <DashboardCard
            icon={<Clock className="w-5 h-5" />}
            title="평균 체류시간"
            value={isLoading ? '...' : formatDuration(analytics?.avgSessionDuration ?? 0)}
            trend={null}
          />
        </div>

        {/* Chart Section */}
        <div className="p-6 rounded-xl bg-card border border-border mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            일별 방문자 추이
          </h2>
          <div className="h-48 flex items-end gap-2">
            {analytics?.visitors.daily.map((day, index) => (
              <div key={day.date} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-primary/20 rounded-t-sm relative group cursor-pointer hover:bg-primary/30 transition-colors"
                  style={{ 
                    height: day.value > 0 ? `${Math.max((day.value / Math.max(...analytics.visitors.daily.map(d => d.value), 1)) * 100, 10)}%` : '4px',
                    minHeight: '4px'
                  }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {day.value}명
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">
                  {new Date(day.date).getDate()}일
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            관리자 메모
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            이 페이지는 관리자 전용입니다. 네비게이션에 표시되지 않으며,
            프로필 사진을 10번 연속 클릭해야 접근할 수 있습니다.
            <br /><br />
            분석 데이터는 Lovable 분석 시스템과 연동되어 있습니다.
            앱이 퍼블리시되고 실제 방문자가 생기면 데이터가 표시됩니다.
          </p>
        </div>
      </div>
    </main>
  );
};

const formatDuration = (seconds: number): string => {
  if (seconds === 0) return '0초';
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins === 0) return `${secs}초`;
  return `${mins}분 ${secs}초`;
};

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: number | null;
}

const DashboardCard = ({ icon, title, value, trend }: DashboardCardProps) => (
  <div className="p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
    <div className="flex items-center gap-2 mb-3">
      <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
    </div>
    <p className="text-xl sm:text-2xl font-bold text-foreground">{value}</p>
    {trend !== null && (
      <p className={`text-xs mt-1 ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {trend >= 0 ? '+' : ''}{trend}% vs 지난주
      </p>
    )}
  </div>
);

export default AdminDashboard;
