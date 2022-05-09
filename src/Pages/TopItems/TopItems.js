import React from 'react';
import './TopItems.css';

const TopItems = () => {


    return (
        <div className='top-body'>
            <h1>CSS Carousel/Slider</h1>


            <div className="c">

                <input type="radio" name="a" id="cr-1" />
                <label for="cr-1" style="--hue: 32"></label>
                <div className="ci" style="--z: 4">
                    <h2 className="ch" style="--h: 32; --s: 80%; --l: 90%">What do you know?</h2>
                    <img src="https://images.unsplash.com/photo-1516655802732-dc776050098b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700" alt="Snow on leafs" />
                </div>

                <input type="radio" name="a" id="cr-2" />
                <label for="cr-2" style="--hue: 82"></label>
                <div className="ci" style="--z: 3">
                    <h2 className="ch" style="--h: 82; --s: 80%; --l: 90%">Look from inside?</h2>
                    <img src="https://images.unsplash.com/photo-1529761430595-036b79cb9d5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700" alt="Trees" />
                </div>

                <input type="radio" name="a" id="cr-3" />
                <label for="cr-3" style="--hue: 40"></label>
                <div className="ci" style="--z: 2">
                    <h2 className="ch" style="--h: 40; --s: 100%; --l: 89%">In the mountains?</h2>
                    <img src="https://images.unsplash.com/photo-1518805629729-3e55b81b2393?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700" alt="Mountains and houses" />
                </div>

                <input type="radio" name="a" id="cr-4" />
                <label for="cr-4" style="--hue: 210"></label>
                <div className="ci" style="--z: 1">
                    <h2 className="ch" style="--h: 210; --s: 70%; --l: 90%">Above looks beautiful?</h2>
                    <img src="https://images.unsplash.com/photo-1488831948116-38bc1351c6d6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700" alt="Sky and mountains" />
                </div>

            </div>


            <a href="https://abubakersaeed.netlify.app" className="abs-site-link" rel="nofollow noreferrer" target="_blank">abs.</a>

            <div className="abs-profiles">
                <a href="https://dribbble.com/AbubakerSaeed" rel="nofollow noreferrer" target="_blank">
                    <img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" style={{ maxWidth: "24px" }} alt="" />
                </a>

                <a href="https://twitter.com/AbubakerSaeed96" rel="nofollow noreferrer" target="_blank">
                    <svg viewBox="0 0 32 32" height="24px">
                        <path fill="hsl(32 50% 50%)" d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
                    </svg>
                </a>
            </div>
        </div >
    );
};

export default TopItems;