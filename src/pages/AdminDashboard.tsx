import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, Users, BarChart3 } from 'lucide-react';

const AdminDashboard = () => {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate('/', { replace: true });
    }
  }, [isAdmin, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-4xl px-4 sm:px-6 md:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            관리자 대시보드
          </h1>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            로그아웃
          </Button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            icon={<Users className="w-6 h-6" />}
            title="방문자"
            value="--"
            description="분석 연동 필요"
          />
          <DashboardCard
            icon={<BarChart3 className="w-6 h-6" />}
            title="페이지뷰"
            value="--"
            description="분석 연동 필요"
          />
          <DashboardCard
            icon={<Settings className="w-6 h-6" />}
            title="설정"
            value=""
            description="콘텐츠 관리"
          />
        </div>

        {/* Info Section */}
        <div className="mt-12 p-6 rounded-xl bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            관리자 메모
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            이 페이지는 관리자 전용입니다. 네비게이션에 표시되지 않으며,
            프로필 사진을 10번 연속 클릭해야 접근할 수 있습니다.
            <br /><br />
            추후 Lovable Cloud를 연결하면 방문자 분석, 콘텐츠 관리 등
            다양한 기능을 추가할 수 있습니다.
          </p>
        </div>
      </div>
    </main>
  );
};

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

const DashboardCard = ({ icon, title, value, description }: DashboardCardProps) => (
  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="font-medium text-foreground">{title}</h3>
    </div>
    {value && (
      <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
    )}
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default AdminDashboard;
