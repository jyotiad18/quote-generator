import React from 'react';
import './Quote.css';

function Quote({ quotes, quoteType, onAuthorClick }) {
	return (
		<div className="quote">		
			{
				quotes && quotes.map((quote, i) => (
					<div key= {i}>
						<div className="quote__detail">
						<div className="detail__liner"></div>
							<span>
								{`"${quote.quoteText}"`}
							</span>
						</div>
						{
							quoteType === "0" ?
								<div className="quote__author" onClick={() => { onAuthorClick(quote.quoteAuthor) }}>
									<h4>{quote.quoteAuthor}</h4>
									<span>{quote.quoteGenre}</span>
								</div>
								: null
						}
					</div>
				))				
		    }	
			
		</div>
	)
}

export default Quote;
