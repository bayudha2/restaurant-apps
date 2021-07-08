(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(e,n,t){"use strict";t.r(n);t(4),t(5);var r=t(3),a={BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images/",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:"restaurant-cache",DATABASE_NAME:"restaurant-catalogue-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurant",API_KEY:"12345"};function i(e,n,t,r,a,i,c){try{var o=e[i](c),s=o.value}catch(e){return void t(e)}o.done?n(s):Promise.resolve(s).then(r,a)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var c=e.apply(n,t);function o(e){i(c,r,a,o,s,"next",e)}function s(e){i(c,r,a,o,s,"throw",e)}o(void 0)}))}}var o=a.DATABASE_NAME,s=a.DATABASE_VERSION,u=a.OBJECT_STORE_NAME,d=Object(r.a)(o,s,{upgrade:function(e){e.createObjectStore(u,{keyPath:"id"})}}),l={getRestaurant:function(e){return c(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,d;case 4:return n.abrupt("return",n.sent.get(u,e));case 5:case"end":return n.stop()}}),n)})))()},getAllRestaurant:function(){return c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d;case 2:return e.abrupt("return",e.sent.getAll(u));case 3:case"end":return e.stop()}}),e)})))()},putRestaurant:function(e){return c(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.hasOwnProperty("id")){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,d;case 4:return n.abrupt("return",n.sent.put(u,e));case 5:case"end":return n.stop()}}),n)})))()},deleteRestaurant:function(e){return c(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d;case 2:return n.abrupt("return",n.sent.delete(u,e));case 3:case"end":return n.stop()}}),n)})))()}},f=t.p+"b0cf6d289ac9b04ce677aa448b1d523e.svg",v=t.p+"0800c30db185f3acbc733a0b23b83064.svg",_=t.p+"575c14d07c19bd4d625b482659e6cc82.svg",p=t.p+"6e40d2d14aa1e80c5ebf34d689f5cf15.svg",h=t.p+"ffbbcbb45a88148fa1e9545f9720274e.svg",m=t.p+"d7b2fbec1b4f9625f8406596acb4913f.png",g=function(e){return'\n<div class="card__item">\n    <figure class="img-wrapper" tabindex="0">\n        <div class="tag">\n            '.concat(e.city,'\n        </div>\n        <img  class="lazyload" data-src="').concat(a.BASE_IMAGE_URL+"medium/"+e.pictureId,'" alt="gambar restaurant ').concat(e.name,'">\n    </figure>\n    <div class="content__wrapper" tabindex="0">\n        <p class="item__rating">Rating: ').concat(e.rating,'</p>\n        <h3 class="item__title"><a id="resto" class="resto" href="',"/#/detail/".concat(e.id),'">').concat(e.name,'</a></h3>\n        <p class="item__desc">').concat(e.description,"</p>\n    </div>\n</div>\n")},b=function(e){for(var n="",t=0;t<e;t+=1)n+='\n<div class="card__item">\n    <figure class="img-wrapper" tabindex="0">\n        <img  src="'.concat(m,'" alt="placeholder">\n    </figure>\n    <div class="content__wrapper" tabindex="0">\n        <p class="item__rating">Rating:...</p>\n        <h3 class="item__title"><a href="#">...</a></h3>\n        <p class="item__desc">...</p>\n    </div>\n</div>\n');return n},w=function(e){var n=[],t=e.categories;Object.values(t).forEach((function(e){n.push(e.name)}));var r=e.description.split("."),i=r.slice(0,7),c=r.slice(7),o=i.join(". "),s=c.join(". ");return'\n    <div class="restaurant__hero">\n            <div class="restaurant__header">\n                <div class="header__content" tabindex="0">\n                    <h1>'.concat(e.name,'</h1>\n                    <p class="detail__rating">Rating : ').concat(e.rating,"</p>\n                    <p>").concat(o,"</p>\n                    <p>").concat(s,'</p>\n                    <div id="likeButtonContainer"></div>\n                    <div class="info__content">\n                        <div class="info__address" tabindex="0">\n                            <img src="').concat(f,'" alt="Pin"/>\n                            <h2>').concat(e.address+", "+e.city,'</h2>\n                        </div>\n                        <div class="info__category" tabindex="0">\n                            <img src="').concat(v,'" alt="SpoonFork"/>\n                            <h2>').concat(n.join(", "),'</h2>\n                        </div>\n                    </div>\n                </div>\n                <div class="hero__banner">\n                    <div class="image__banner" tabindex="0">\n                        <img class="picture__banner" src="').concat(a.BASE_IMAGE_URL+"medium/"+e.pictureId,'" alt="').concat(e.name,'"/>\n                        <img class="frame__banner" src="').concat(_,'" alt="').concat(e.name,'"/>\n                    </div>\n                </div>\n            </div>\n    </div>\n')},k=function(e){return'\n    <div class="dish__card" tabindex="0">\n      <figure class="image__dish">\n        <img src="'.concat(p,'" alt="food default logo"/>\n      </figure>\n      <div class="dish__content">\n        <h3>').concat(e,"</h3>\n      </div>\n    </div>\n    ")},R=function(e){return'\n    <div class="drink__card" tabindex="0">\n      <figure class="image__drink">\n        <img src="'.concat(h,'" alt="drink default logo"/>\n      </figure>\n      <div class="drink__content">\n        <h3>').concat(e,"</h3>\n      </div>\n    </div>\n    ")},x=function(e){return'\n    <div class="card" tabindex="0">\n      <h1>\'\'</h1>\n      <p class="reviewer__review">'.concat(e.review,'</p>\n      <p class="reviewer__nameDate"><span class="reviewer__name">').concat(e.name,"</span>/ ").concat(e.date,"</p>\n    </div>\n  ")},y=function(e){return'\n    <div class="likedRestaurant__item">\n      <figure tabindex="0">\n        <img class="likedRestaurant_picture" src="'.concat(a.BASE_IMAGE_URL+"medium/"+e.pictureId,'" alt="').concat(e.name,'"/>\n      </figure>\n      <div class="liked__content" tabindex="0">\n        <h2>').concat(e.name,'</h2>\n        <p class="liked__rating">Rating : ').concat(e.rating,'</p>\n        <p class="liked__description">').concat(e.description,'</p>\n      </div>\n      <div class="button__seeDetail" tabindex="0">\n        <button class="see__detail"><a href="',"/#/detail/".concat(e.id),'">See Detail</a></button>\n      </div>\n    </div>\n  ')};function E(e,n,t,r,a,i,c){try{var o=e[i](c),s=o.value}catch(e){return void t(e)}o.done?n(s):Promise.resolve(s).then(r,a)}function L(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){E(i,r,a,c,o,"next",e)}function o(e){E(i,r,a,c,o,"throw",e)}c(void 0)}))}}var S={init:function(e){var n=this;return L(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.likeButtonContainer,a=e.restaurant,n._likeButtonContainer=r,n._restaurant=a,t.next=5,n._renderButton();case 5:case"end":return t.stop()}}),t)})))()},_renderButton:function(){var e=this;return L(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e._restaurant.id,n.next=3,e._isRestaurantExist(t);case 3:if(!n.sent){n.next=7;break}e._renderLiked(),n.next=8;break;case 7:e._renderLike();case 8:case"end":return n.stop()}}),n)})))()},_isRestaurantExist:function(e){return L(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.getRestaurant(e);case 2:return t=n.sent,n.abrupt("return",!!t);case 4:case"end":return n.stop()}}),n)})))()},_renderLiked:function(){var e=this;this._likeButtonContainer.innerHTML='\n<button aria-label="unlike this restaurant" id="unlikeButton" class="like">Remove from favorite</button>\n',document.querySelector("#unlikeButton").addEventListener("click",L(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.deleteRestaurant(e._restaurant.id);case 2:e._renderButton();case 3:case"end":return n.stop()}}),n)}))))},_renderLike:function(){var e=this;this._likeButtonContainer.innerHTML='\n<button aria-label="like this restaurant" id="likeButton" class="like">Add to favorite</button>\n',document.querySelector("#likeButton").addEventListener("click",L(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.putRestaurant(e._restaurant);case 2:e._renderButton();case 3:case"end":return n.stop()}}),n)}))))}},A={HOME:"".concat(a.BASE_URL,"list"),DETAIL:function(e){return"".concat(a.BASE_URL,"detail/").concat(e)},REVIEW:"".concat(a.BASE_URL,"review")};function T(e,n,t,r,a,i,c){try{var o=e[i](c),s=o.value}catch(e){return void t(e)}o.done?n(s):Promise.resolve(s).then(r,a)}function M(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){T(i,r,a,c,o,"next",e)}function o(e){T(i,r,a,c,o,"throw",e)}c(void 0)}))}}function H(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r,i,c,o;return n=e,t=null,r=[{key:"listRestaurant",value:(o=M(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(A.HOME);case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t.restaurants);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return","failed");case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),function(){return o.apply(this,arguments)})},{key:"detailRestaurant",value:(c=M(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(A.DETAIL(n));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.restaurant);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return","failed");case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),function(e){return c.apply(this,arguments)})},{key:"uploadReview",value:(i=M(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(A.REVIEW,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":a.API_KEY},body:JSON.stringify(n)});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.next=7,document.location.reload();case 7:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})}],t&&H(n.prototype,t),r&&H(n,r),e}(),B={parseActiveUrlWithCombiner:function(){var e=window.location.hash.slice(1).toLowerCase(),n=this._urlSplitter(e);return this._urlCombiner(n)},parseActiveUrlWithoutCombiner:function(){var e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter:function(e){var n=e.split("/");return{resource:n[1]||null,id:n[2]||null,verb:n[3]||null}},_urlCombiner:function(e){return(e.resource?"/".concat(e.resource):"/")+(e.id?"/:id":"")+(e.verb?"/".concat(e.verb):"")}},D=t.p+"15ddeb7bd3603eed90e40254db9f95f5.svg",C=t.p+"ed92d66e6f95c36310644946127139a7.svg",q=t.p+"413567ac2bfbee279acdcb85b4a52a4f.svg";function I(e,n,t,r,a,i,c){try{var o=e[i](c),s=o.value}catch(e){return void t(e)}o.done?n(s):Promise.resolve(s).then(r,a)}function O(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){I(i,r,a,c,o,"next",e)}function o(e){I(i,r,a,c,o,"throw",e)}c(void 0)}))}}function U(e,n,t,r,a,i,c){try{var o=e[i](c),s=o.value}catch(e){return void t(e)}o.done?n(s):Promise.resolve(s).then(r,a)}function j(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){U(i,r,a,c,o,"next",e)}function o(e){U(i,r,a,c,o,"throw",e)}c(void 0)}))}}function N(e,n,t,r,a,i,c){try{var o=e[i](c),s=o.value}catch(e){return void t(e)}o.done?n(s):Promise.resolve(s).then(r,a)}function W(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){N(i,r,a,c,o,"next",e)}function o(e){N(i,r,a,c,o,"throw",e)}c(void 0)}))}}var Y={render:function(){return W(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n        <section id="home__items" class="home__items">\n          <div class="restaurant__head" tabindex="0">\n              <p>List of The</p>\n              <h1>RESTAURANT</h1>\n          </div>\n          <article class="most-picked">\n            <h2 class="heading__article">Most Picked</h2>\n            <div id="item__most" class="item__most">\n              '.concat(b(3),'\n            </div>\n          </article>\n          <article class="popular">\n          <h2 class="heading__article">Popular</h2>\n            <div id="item__popular" class="item__popular">\n              ').concat(b(14),'\n            </div>\n          </article>\n          <article class="others">\n          <h2 class="heading__article">Others</h2>\n            <div id="item__others" class="item__others">\n              ').concat(b(6),'\n            </div>\n          </article>\n        </section>\n        <section>\n            <div class="about__us">\n                <figure class="about__img" tabindex="0">\n                    <img src="images/restaurant.jpg" alt="gambar restaurant">\n                </figure>\n                <div class="about__content">\n                    <div class="container" >\n                        <p class="about_us" tabindex="0">About Us</p>\n                        <h2 class="about__title" tabindex="0">YummYResto.</h2>\n                        <p class="about__desc" tabindex="0">YummyResto is a website to find various extraordinary restaurants. This website has been established since 1990 and is used by various restaurants to promote their restaurant in the hope that in the future it will be known by everyone. Restaurants listed on most large websites have stars above 4, so they are guaranteed to be satisfying.<br><br>We will always provide the latest information based on trends, feedback, news about delicious food at existing restaurants. I hope that with this, customers will not feel confused about finding a good restaurant.</p>\n                        <img src="images/signature.png" tabindex="0" alt="tanda tangan">\n                    </div>\n                </div>\n            </div>\n        </section>\n        '));case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return W(regeneratorRuntime.mark((function e(){var n,t,r,a,i,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.listRestaurant();case 2:"failed"===(n=e.sent)&&(document.querySelector("#home__items").innerHTML='\n      <figure class="nodata__figure">\n          <img class="nodata__picture" src="'.concat(q,'" alt="No Data Illustration"/>\n      </figure>\n      <h1 class="nodata__description">Whoops.. Sorry for bad services.</h1>\n      ')),t=n.filter((function(e){return e.rating>4.7})),r=n.filter((function(e){return e.rating>=4})),a=n.filter((function(e){return e.rating<4})),i=document.querySelector("#item__most"),c=document.querySelector("#item__popular"),o=document.querySelector("#item__others"),i.innerHTML="",c.innerHTML="",o.innerHTML="",t.forEach((function(e){i.innerHTML+=g(e)})),r.forEach((function(e){c.innerHTML+=g(e)})),a.forEach((function(e){o.innerHTML+=g(e)}));case 16:case"end":return e.stop()}}),e)})))()}},G={"/":Y,"/home":Y,"/detail/:id":{render:function(){return O(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n    <section id="detail__items">\n        <article id="restaurant" class="restaurant"></article>  \n        <div class="loading__image">\n              <img class="loading__loader" src="'.concat(C,'" alt="preloader"/>\n            </div>\n        <article class="specialDish">\n            <div class="specialDish__title">\n                <div class="specialDish__head" tabindex="0">\n                    <h2 class="heading__special">Our Special Dish</h2>\n                    <p>Made with premium ingridients.</p>\n                </div>\n                <div id="dish__list" class="dish__list"></div>\n                <div class="loading__image">\n                  <img class="loading__loader" src="').concat(C,'" alt="preloader"/>\n                </div>\n                <div class="horizontal__scroll">\n                    <img src="').concat(D,'" alt="Horizontal scroll"/>\n                </div>\n            </div>      \n        </article>\n        <article class="specialDrink">\n            <div class="specialDrink__title">\n                <div class="specialDrink__head" tabindex="0">\n                <h2 class="heading__special">Our Special Drink</h2>\n                    <p>Made with premium ingridients.</p>\n                </div>\n                <div id="drink__list" class="drink__list"></div>\n                <div class="loading__image">\n                  <img class="loading__loader" src="').concat(C,'" alt="preloader"/>\n                </div>\n                <div class="horizontal__scroll">\n                    <img src="').concat(D,'" alt="Horizontal scroll"/>\n                </div>\n            </div>      \n        </article>\n        <article class="customer__riview">\n            <div class="container" tabindex="0">\n                <h2>Customer say about us</h2>\n                <div id="review__card" class="review__card"></div>\n                <div class="personal__review" tabindex="0">\n                    <h3>What do you think about this restaurant ?</h3>\n                    <div class="review__container">\n                        <form id="review__form" class="review__form" tabindex="0">\n                            <input placeholder="Name" type="text" id="name" name="name">\n                            <input placeholder="Well, I think..." type="text" id="review" name="review">\n                        </form>\n                        <button id="review__submit">Submit</button>\n                    </div>\n                </div>\n            </div>\n        </article>\n    </section>\n        '));case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){var e=this;return O(regeneratorRuntime.mark((function n(){var t,r,a,i,c,o,s,u,d,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=function(){var e=document.querySelector("#name").value,n=document.querySelector("#review").value;if(""!==e&&""!==n){var t={id:r.id,name:e,review:n};return P.uploadReview(t)}alert("Please complete the review")},t=B.parseActiveUrlWithoutCombiner(),n.next=4,P.detailRestaurant(t.id);case 4:return"failed"===(r=n.sent)&&(document.querySelector("#detail__items").innerHTML='\n      <figure class="nodata__figure" tabindex="0">\n          <img class="nodata__picture" src="'.concat(q,'" alt="No Data Illustration"/>\n      </figure>\n      <h1 class="nodata__description">Whoops.. Sorry for bad services.</h1>\n      ')),n.next=8,e._changeDetail();case 8:a=e._dishChanger(r.menus),i=e._drinkChanger(r.menus),c=r.customerReviews,o=document.querySelector("#restaurant"),s=document.querySelector("#dish__list"),u=document.querySelector("#drink__list"),d=document.querySelector("#review__card"),document.querySelector("#review__submit").addEventListener("click",l),o.innerHTML=w(r),a.forEach((function(e){s.innerHTML+=k(e)})),i.forEach((function(e){u.innerHTML+=R(e)})),c.forEach((function(e){d.innerHTML+=x(e)})),S.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),restaurant:{id:r.id,name:r.name,rating:r.rating,pictureId:r.pictureId,description:r.description}});case 22:case"end":return n.stop()}}),n)})))()},_dishChanger:function(e){var n=[];return Object.values(e.foods).forEach((function(e){n.push(e.name)})),n},_drinkChanger:function(e){var n=[];return Object.values(e.drinks).forEach((function(e){n.push(e.name)})),n},_changeDetail:function(){document.querySelectorAll(".loading__image").forEach((function(e){e.innerHTML=""}))}},"/favorite":{render:function(){return j(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n        <section class="liked__restaurant">\n            <article class="liked__container" tabindex="0">\n                <h1>Restaurant you liked</h1>\n                <p>List Restaurant</p>\n                <div id="list__likedRestaurant" class="list__likedRestaurant"></div>\n            </article>\n        </section>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return j(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getAllRestaurant();case 2:n=e.sent,t=document.querySelector("#list__likedRestaurant"),0===n.length&&(t.innerHTML='\n        <div class="no__data">\n            <figure>\n                <img class="nodata__picture" src="'.concat(q,'" alt="No Data Illustration"/>\n            </figure>\n            <h1 class="nodata__description">Whoops.. You didn\'t liked any restaurant yet.</h1>\n        </div>\n      ')),n.forEach((function(e){t.innerHTML+=y(e)}));case 6:case"end":return e.stop()}}),e)})))()}}},z={init:function(e){var n=this,t=e.hero,r=e.button,a=e.drawer,i=e.content;r.addEventListener("click",(function(e){n._toggleDrawer(e,a)})),i.addEventListener("click",(function(e){n._closeDrawer(e,a)})),t.addEventListener("click",(function(e){n._closeDrawer(e,a)}))},_toggleDrawer:function(e,n){e.stopPropagation(),n.classList.toggle("open")},_closeDrawer:function(e,n){e.stopPropagation(),n.classList.remove("open")}},J={changeHero:function(e){var n=document.querySelector(".hero__title"),t=document.querySelector(".hero__tagline"),r=document.querySelector(".button");"/"!==e&&"/home"!==e||(n.innerHTML="Looking for great food ?",t.innerHTML="Here in YummYResto, we provide any kind of restaurant that you want.</br>\n        Many kind of dishes from many popular restaurant are in here.",r.innerHTML="EXPLORE"),"/detail/:id"!==e&&"/favorite"!==e||(n.innerHTML="Looking for more ?",t.innerHTML="",r.innerHTML="Back to Home")}};function V(e,n,t,r,a,i,c){try{var o=e[i](c),s=o.value}catch(e){return void t(e)}o.done?n(s):Promise.resolve(s).then(r,a)}function F(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var K=function(){function e(n){var t=n.hero,r=n.content,a=n.drawer,i=n.button;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._button=i,this._drawer=a,this._content=r,this._hero=t,this._initialAppShell()}var n,t,r,a,i;return n=e,(t=[{key:"_initialAppShell",value:function(){z.init({button:this._button,drawer:this._drawer,content:this._content,hero:this._hero})}},{key:"renderPage",value:(a=regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=B.parseActiveUrlWithCombiner(),J.changeHero(n),t=G[n],e.next=5,t.render();case 5:return this._content.innerHTML=e.sent,e.next=8,t.afterRender();case 8:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,n=arguments;return new Promise((function(t,r){var i=a.apply(e,n);function c(e){V(i,t,r,c,o,"next",e)}function o(e){V(i,t,r,c,o,"throw",e)}c(void 0)}))},function(){return i.apply(this,arguments)})}])&&F(n.prototype,t),r&&F(n,r),e}(),X=t(2),Q=t.n(X);function Z(e,n,t,r,a,i,c){try{var o=e[i](c),s=o.value}catch(e){return void t(e)}o.done?n(s):Promise.resolve(s).then(r,a)}var $=function(){var e,n=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=4;break}return e.next=3,Q.a.register();case 3:return e.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){Z(i,r,a,c,o,"next",e)}function o(e){Z(i,r,a,c,o,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}(),ee=(t(1),t(9),new K({content:document.querySelector("#maincontent"),button:document.querySelector("#hamburgerButton"),drawer:document.querySelector("#navigationDrawer"),hero:document.querySelector(".hero")}));window.addEventListener("hashchange",(function(){ee.renderPage()})),window.addEventListener("load",(function(){ee.renderPage(),$()}))}}]);