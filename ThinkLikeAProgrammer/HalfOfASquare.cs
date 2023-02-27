public class Solution {
  public string HalfOfASquare (int squareSize, string output, int current) {
    if (!output) 
    {
      string output = ""
    };
    if (!current) 
    {
      int current = squareSize
    }; 
    else 
    {
      output += "/n"
    };
    for (int x = 0; x < current; x++)
    {
      output += "#"
    }
    current -= 1;
    if (current != 0) 
    {
      HalfOfASquare(squareSize, output, current)
    }; 
    else {
      return output;
    }
  };
};

string answer = HalfOfASquare(5);
console.log(answer;)