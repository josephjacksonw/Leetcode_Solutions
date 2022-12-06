public class Solution {
    public int MaxProfit(int[] prices) {
        int answer = 0;
        int min = -1;
        for (int i = 0; i < prices.Length; i++)
        {
            if (min < 0)
            {
                min = prices[i];
            } else 
            {
                if (prices[i] < min)
                {
                    min = prices[i];
                } else
                {
                    if (prices[i] - min > answer)
                    {
                        answer = prices[i] - min;
                    }
                }
            }
        }
        return answer;
    }
}