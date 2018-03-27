#  kusoftware Coding Challenges

## Kit Kat Counter

This one is fairly simple. I loop through all of the numbers between 1 and 100. I then check to see if there is a remainder when dividing by 3 or 7. If it is, I print either 'kit' or 'kat'.

## Fibonacci Counter

I chose to do a recursive strategy to keep me from having to generate the Fibonacci sequence all the way to infinity. Instead, this function will just generate the sequence to the nth degree, where n equals the input integer.

## Character Counter

For this challenge, I chose to store the final count in an array of strings showing how many times each letter appears. I loop through the characters using their character codes instead of listing out each letter, just to save myself from having to define the alphabet. In the loop, I split the string into an array of all instances into the current character. I use the gi tag to also include capital and lowercase versions of the character. After that, I push a string containing the current character and the number of instances of that character. If there are none of the current character, I do not create the string. I end up with an array of strings that state each letter and how many times that letter appears. I finish it off by just returning the resulting array.

### How would you modify this function to instead, accept a URL and count the characters on a web page the URL points to?
	
I would start by getting the main HTML features of the webpage into strings, using something like, 'document.getElementsByTagName('p')[0]' with p, div, probably h1, h2, h3, etc. Then I would push all of these strings into an array and turn that array into a large string. At that point, I could use my function from above to get the same result.

Issues might occur from duplicate entries by getting the elements by tag name. Another way to go about it is to just take the entire body tag, and remove everything between '<' and '>' and that should allow you to only get the text from the page.

### How would you build a system that uses the function you just described to count all of the characters in Wikipedia?
	
I would use the Wikipedia API to get the data from a page, and then process that data that same way as above. Having the Wikipedia API should make getting the data a lot easier.

### How can you take this system and make it faster?  Let's say I have a 1 day/hour time limit.

I think the function is pretty quick on its own, it's only 11 lines of code. However, you do waste some time looping through unnecessary letters that do not appear in the string. It may be faster to create an array of all letters actually in the string and then counting the characters based on that array instead of just looping through all letters of the alphabet.