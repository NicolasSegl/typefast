let firstLetter = true
let firstWord = true

function isLastChar(char)
{
    if (char === ' ' || isPuncuation(char))
    {
        return true
    }

    return false
}

// quotation marks?
function isPuncuation(char)
{
    if (char === ',' || char === '.' || char == '!' || char == '?' || char == ';')
    {
        return true
    }
}

function type(node, inputBox) 
{
    // every key press, type in the correct character in the last box
    let replaceValue = inputBox.value.substring(0, inputBox.value.length - 1)
    console.log("substring: " + inputBox.value.charAt(inputBox.value.length - 1))
    console.log("first letter: " + firstLetter)

    // first letter:
    // first child is the correct letter
    if (firstLetter && firstWord)
    {
        replaceValue += node.children[0].innerHTML
        if (isPuncuation(node.children[0].innerHTML))
        {
            replaceValue += ' '
        }
        inputBox.value = replaceValue
        firstLetter = false

        if (isLastChar(node.children[0].innerHTML))
        {
            firstWord = false
            firstLetter = true
        }
    }
    
    // first word, after the first letter:
    // first child is what you have typed
    // second child is what you need to type next

    else if (firstWord && !firstLetter)
    {
        replaceValue += node.children[1].innerHTML
        if (isPuncuation(node.children[1].innerHTML))
        {
            replaceValue += ' '
        }
        inputBox.value = replaceValue

        if (isLastChar(node.children[1].innerHTML))
        {
            firstWord = false
            firstLetter = true
        }
    }

    // all other words
    // first letter:
    // second child is what you need to type
    // after first letter:
    // third child is what you need to type, second becomes what you have typed
    else if (!firstWord && firstLetter) // this if is the same as above
    {
        replaceValue += node.children[1].innerHTML
        if (isPuncuation(node.children[1].innerHTML))
        {
            replaceValue += ' '
        }
        inputBox.value = replaceValue
        firstLetter = false

        if (isLastChar(node.children[1].innerHTML))
        {
            firstLetter = true
        }
    }

    else if (!firstWord && !firstLetter)
    {
        replaceValue += node.children[2].innerHTML
        if (isPuncuation(node.children[2].innerHTML))
        {
            replaceValue += ' '
        }
        inputBox.value = replaceValue

        if (isLastChar(node.children[2].innerHTML))
        {
            firstLetter = true
        }
    }
}

function inject() 
{
    // first, wait until the input text box is in focus (i.e. clicked on and ready to type in)
    let txtInputBox = document.querySelector(".gameView .txtInput")
    if (!txtInputBox)
        return false;

    const HASH_STRING_SIZE = 17;
    let nodeList = document.querySelectorAll(".gameView div")
    
    for (let nodeIndex = 0; nodeIndex < nodeList.length; nodeIndex++)
    {
        let node = nodeList[nodeIndex]
        if (node.classList.length === 2)
        {
            // if the class name is the hash relating to the quote
            if (node.className.length === HASH_STRING_SIZE)
                {
                    console.log("typefast: input box located")

                    //let txtInputBox = document.querySelector(".gameView .txtInput")
                    // first letter
                    //txtInputBox.value = node.children[0].innerHTML
                    txtInputBox.addEventListener("keydown", function() { type(node, txtInputBox) });
                }
        }
    }
}

inject()