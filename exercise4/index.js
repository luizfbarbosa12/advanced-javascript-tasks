// Write an efficient method that tells us whether or not an input string brackets ("{", "}",
// "(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
// “{([)]}” => false

const checkBrackets = (string) =>  {
    const stack = [];
    // Iterate through each character in the input string s.
    for (let i of string) {
      console.log(i)
      switch (i) {
        // If the character is an opening bracket, push it onto the stack.
        case '(':
        case '{':
        case '[':
          stack.push(i);
          break;
        // If the character is a closing bracket, pop the last element from the stack and check if it matches the corresponding opening bracket using a switch statement.
        case ')':
          if (stack.pop() !== '(') return false;
          break;
        case '}':
          if (stack.pop() !== '{') return false;
          break;
        case ']':
          if (stack.pop() !== '[') return false;
          break;
      }
    }
    // If the stack is empty, all brackets have been properly closed, and we return true. Otherwise, we return false.
    return stack.length === 0;
  }

  console.log(checkBrackets('{([)]}'))