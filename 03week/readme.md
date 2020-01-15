Steps to make Towers of Hanoi

1. Get the prompt of 2 inputs, startStack and endStack.

2. Send the arguments to towersOfHanoi()

3. Check if the move is legal by seeing if the last number in the start stack is smaller than the last number in the end stack.

4. If the move is legal, tell the moveStacks function to fire.

5. Pop the number off the end of startStack and push it to the end of endStack.

6. check to see if the move results in a win by seeing if any array has all four numbers.

7. if there's a win, return win message. If not, getPrompt() again.
