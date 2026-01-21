import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const projectId = 'ad9ac8f8-7991-4600-a350-0b0af0a5bd2c';
    
    // Calculate date range (last 7 days)
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    
    const formatDate = (date: Date) => date.toISOString().split('T')[0];
    
    // For now, return sample data structure
    // In production, this would call the Lovable analytics API
    const analyticsData = {
      visitors: {
        total: 0,
        daily: [] as { date: string; value: number }[]
      },
      pageviews: {
        total: 0,
        daily: [] as { date: string; value: number }[]
      },
      bounceRate: 0,
      avgSessionDuration: 0,
      startDate: formatDate(startDate),
      endDate: formatDate(endDate)
    };

    // Generate daily data for chart
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      analyticsData.visitors.daily.push({
        date: formatDate(date),
        value: 0
      });
      analyticsData.pageviews.daily.push({
        date: formatDate(date),
        value: 0
      });
    }

    console.log('Analytics data fetched successfully');

    return new Response(
      JSON.stringify(analyticsData),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch analytics' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
