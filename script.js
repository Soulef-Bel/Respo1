
const quoteText = document.querySelector(".QuoteRandom");
quoteAuthor = document.querySelector(".author_name");

function randomQuote()
{ 
	fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerHTML = result.content;
		quoteAuthor.innerHTML = result.author;

	});
}

function speech()
{
	var msg = new SpeechSynthesisUtterance();
	msg.text = quoteText.innerHTML;
	window.speechSynthesis.speak(msg);
}

function copy()
{
	navigator.clipboard.writeText(quoteText.innerHTML);
}
    
function tweet()
{
	let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
}