@import url("https://fonts.googleapis.com/css?family=Amatic+SC|Montserrat");

body {
    font - family: "Montserrat", sans - serif!important;
}
.arrow {
    margin - top: 100px;
}
a {
    color: #305cd4;
}

a: hover {
    color: #305cd4;
    text - decoration: none;
}

/* 
.back-to-top {
  position: fixed;
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  right: 15px;
  bottom: 15px;
  background: #305cd4;
  color: #fff;
  transition: display 0.5s ease-in-out;
  z-index: 99999;
}

.back-to-top {
  font-size: 24px;
  position: absolute;
  top: 7px;
  left: 8px;
}

.back-to-top:hover {
  color: #fff;
  background: #db528c;
  transition: background 0.2s ease-in-out;
} */

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
    transition: all 0.5s;
    z - index: 997;
    transition: all 0.5s;
    padding: 10px 0;
    background: #fff;
    box - shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
}

#header.logo h1 {
    font - size: 26px;
    margin: 0;
    padding: 6px 0;
    line - height: 1;
    font - weight: 500;
    letter - spacing: 3px;
    text - transform: uppercase;
}

#header.logo h1 a,
#header.logo h1 a: hover {
    color: #2c4964;
    text - decoration: none;
}

#header.logo img {
    padding: 0;
    margin: 0;
    max - height: 40px;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
.nav - menu,
.nav - menu * {
        margin: 0;
        padding: 0;
        list- style: none;
}

.nav - menu > ul > li {
    position: relative;
    white - space: nowrap;
    float: left;
}

.nav - menu a {
    display: block;
    position: relative;
    color: #2c4964;
    padding: 15px;
    transition: 0.3s;
    font - size: 14px;
    font - weight: normal;
}

.nav - menu a: hover,
.nav - menu.active > a,
.nav - menu li: hover > a {
    color: #305cd4;
    text - decoration: none;
}

.nav - menu.drop - down ul {
    display: block;
    position: absolute;
    left: 0;
    top: 100 %;
    z - index: 99;
    opacity: 0;
    visibility: hidden;
    padding: 10px 0;
    background: #fff;
    box - shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: ease all 0.3s;
}

.nav - menu.drop - down: hover > ul {
    opacity: 1;
    visibility: visible;
}

.nav - menu.drop - down li {
    min - width: 180px;
    position: relative;
}

.nav - menu.drop - down ul a {
    padding: 10px 20px;
    font - size: 14px;
    font - weight: 500;
    text - transform: none;
    color: #2c4964;
}

.nav - menu.drop - down ul a: hover,
.nav - menu.drop - down ul.active > a,
.nav - menu.drop - down ul li: hover > a {
    color: #305cd4;
}

.nav - menu.drop - down > a: after {
    content: "\ea99";
    padding - left: 5px;
}

.nav - menu.drop - down.drop - down ul {
    top: 0;
    left: calc(100 % - 30px);
}

.nav - menu.drop - down.drop - down: hover > ul {
    opacity: 1;
    top: 0;
    left: 100 %;
}

.nav - menu.drop - down.drop - down > a {
    padding - right: 35px;
}

.nav - menu.drop - down.drop - down > a: after {
    content: "\eaa0";
    position: absolute;
    right: 15px;
}

@media(max - width: 1366px) {
  .nav - menu.drop - down.drop - down ul {
        left: -90 %;
    }
  .nav - menu.drop - down.drop - down: hover > ul {
        left: -100 %;
    }
  .nav - menu.drop - down.drop - down > a: after {
        content: "\ea9d";
    }
}

/* Mobile Navigation */
.mobile - nav - toggle {
    position: fixed;
    right: 15px;
    top: 15px;
    z - index: 9998;
    border: 0;
    background: none;
    font - size: 24px;
    transition: all 0.4s;
    line - height: 1;
    cursor: pointer;
    text - align: right;
}

.mobile - nav - toggle i {
    color: #305cd4;
}

.mobile - nav {
    position: fixed;
    top: 55px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    z - index: 9999;
    overflow - y: auto;
    background: #fff;
    transition: ease -in -out 0.2s;
    opacity: 0;
    visibility: hidden;
    border - radius: 10px;
    padding: 10px 0;
}

.mobile - nav * {
    margin: 0;
    padding: 0;
    list- style: none;
}

.mobile - nav a {
    display: block;
    position: relative;
    color: #2c4964;
    padding: 10px 20px;
    font - weight: 500;
    outline: none;
}

.mobile - nav a: hover,
.mobile - nav.active > a,
.mobile - nav li: hover > a {
    color: #305cd4;
    /* //primary */
    text - decoration: none;
}

.mobile - nav.drop - down > a: after {
    content: "\ea99";
    padding - left: 10px;
    position: absolute;
    right: 15px;
}

.mobile - nav.active.drop - down > a: after {
    content: "\eaa1";
}

.mobile - nav.drop - down > a {
    padding - right: 35px;
}

.mobile - nav.drop - down ul {
    display: none;
    overflow: hidden;
}

.mobile - nav.drop - down li {
    padding - left: 20px;
}

.mobile - nav - overly {
    width: 100 %;
    height: 100 %;
    z - index: 9997;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(28, 47, 65, 0.6);
    overflow: hidden;
    display: none;
    transition: ease -in -out 0.2s;
}

.mobile - nav - active {
    overflow: hidden;
}

.mobile - nav - active.mobile - nav {
    opacity: 1;
    visibility: visible;
}

.mobile - nav - active.mobile - nav - toggle i {
    color: #fff;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.mylogo {
    max - width: 6vw;
    max - height: 6vh;
    color: #305cd4!important;
}
#hero {
    width: 100 %;
    height: 80vh;
    background - image: url("hero.jpg");
    padding: 0 15px;
    background - size: cover;
}
#navbar - toggler - right {
    text - align: right!important;
}
.main {
    margin - top: 70px;
    color: white;
    font - size: 50px;
}
.sub {
    color: white;
    font - size: 20px;
}

hr {
    width: 50 %;
    height: 3px!important;
    background - color: white;
    border: 0;
    margin - bottom: 50px;
}

#hero h1 {
    margin: 0 0 10px 0;
    font - size: 48px;
    font - weight: 700;
    line - height: 56px;
    color: #fff;
}

#hero h2 {
    color: #eee;
    margin - bottom: 10px;
    font - size: 24px;
    font - weight: 300;
}

#hero.btn - get - started {
    font - size: 64px;
    transition: 0.5s;
    color: #fff;
    height: 60px;
}

#hero.btn - get - started: hover {
    padding - top: 10px;
    color: #305cd4;
}

@media(min - width: 1024px) {
  #hero {
        background - attachment: fixed;
    }
}

@media(max - width: 768px) {
  #hero h1 {
        font - size: 28px;
        line - height: 36px;
    }
  #hero h2 {
        font - size: 18px;
        line - height: 24px;
        margin - bottom: 30px;
    }
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
    padding: 60px 0;
}

.section - bg {
    background: linear - gradient(180deg, #f2f6f9 0 %, #fff 100 %);
}

.section - title {
    padding - bottom: 30px;
}

.section - title h2 {
    font - size: 32px;
    font - weight: bold;
    margin - bottom: 15px;
    padding - bottom: 15px;
    position: relative;
    color: #345676;
}

.section - title h2:: after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: #305cd4;
    bottom: 0;
    left: 0;
}

.section - title p {
    margin - bottom: 0;
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs {
    padding: 15px 0;
    background - color: #fcf2f7;
    min - height: 40px;
}

.breadcrumbs h2 {
    font - size: 24px;
    font - weight: 300;
}

.breadcrumbs ol {
    display: flex;
    flex - wrap: wrap;
    list - style: none;
    padding: 0;
    margin: 0;
    font - size: 14px;
}

.breadcrumbs ol li + li {
    padding - left: 10px;
}

.breadcrumbs ol li + li:: before {
    display: inline - block;
    padding - right: 10px;
    color: #6c757d;
    content: "/";
}

/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.myprojects {
    color: #255786!important;
}

.about.content {
    padding: 30px 0;
}

.about.content h3 {
    font - weight: 500;
    font - size: 34px;
    color: #2c4964;
}

.about.content p {
    margin - bottom: 0;
}

.about.content.count - box {
    padding: 20px 0;
    width: 100 %;
}

.about.content.count - box i {
    display: block;
    font - size: 24px;
    color: #eeafca;
    float: left;
}

.about.content.count - box span {
    font - size: 24px;
    line - height: 20px;
    display: block;
    font - weight: 700;
    color: #2c4964;
    /* margin-left: 50px; */
}

.about.content.count - box {
    padding: 15px 0 0 0;
    /* margin: 0 0 0 50px; */
    font - size: 14px;
    color: #437099;
}

.about.content.count - box a {
    font - weight: 600;
    display: block;
    margin - top: 20px;
    color: #437099;
    font - size: 15px;
    transition: ease -in -out 0.3s;
}

.about.content.count - box a: hover {
    color: #6b96be;
}

.about.image {
    background - image: url("https://getwallpapers.com/wallpaper/full/0/6/b/1418311-gradient-wallpapers-1920x1200-mobile.jpg");
    background - size: cover;
    min - height: 400px;
}
.mypicture {
    max - height: 50vh;
    max - width: 50vw;
    border - radius: 50 %;
}
.myintro {
    line - height: 30px;
    /* letter-spacing: 2px; */
}
.developer {
    color: #255786;
    font - weight: bold;
}
.quote {
    font - style: italic;
}
.interestsec {
    margin: 30px;
}
.card - header {
    font - weight: bold;
}
.card {
    border: 1px solid black!important;
    max - width: 80vw;
    max - height: 50vh;
}
.interests {
    padding: 10px;
}
.projectdisplay {
    height: 210px;
    max - width: 100vw;
}
.projecttitle {
    color: #2c4964;
    font - weight: bold;
    /* margin-top: 10px; */
}

.projectdes {
    padding: 5px 5px 5px 0;
    text - align: justify;
}

.projecticon {
    padding: 0 10px 0 10px;
    color: #2c4964;
}
@media(max - width: 991px) {
  .about.image {
        text - align: center;
    }
  .about.image img {
        max - width: 80 %;
    }
}

@media(max - width: 667px) {
  .about.image img {
        max - width: 100 %;
    }
}

/*--------------------------------------------------------------
# Skills
--------------------------------------------------------------*/
.skills.progress {
    height: 50px;
    display: block;
    background: none;
}

.skills.progress.skill {
    padding: 10px 0;
    margin: 0 0 6px 0;
    text - transform: uppercase;
    display: block;
    font - weight: 600;
    color: #2c4964;
}

.skills.progress.skill.val {
    float: right;
    /* font-style: normal; */
}

.skills.progress - bar - wrap {
    background: #fbeaf1;
}

.skills.progress - bar {
    width: 1px;
    height: 10px;
    transition: 0.9s;
    background - color: #305cd4;
}

/*--------------------------------------------------------------
# Resume
--------------------------------------------------------------*/
.resume.resume - title {
    font - size: 26px;
    font - weight: 500;
    margin - top: 20px;
    margin - bottom: 20px;
    color: #4b7dab;
}

.resume.resume - item {
    padding: 0 0 20px 20px;
    margin - top: -2px;
    border - left: 2px solid#305cd4;
    position: relative;
}

.resume.resume - item h4 {
    line - height: 18px;
    font - size: 18px;
    font - weight: 600;
    color: #2c4964;
    margin - bottom: 10px;
}

.resume.resume - item h5 {
    font - size: 16px;
    background: #e4ebf3;
    padding: 5px 15px;
    display: inline - block;
    font - weight: 400;
    margin - bottom: 10px;
}

.resume.resume - item ul {
    padding - left: 20px;
}

.resume.resume - item ul li {
    padding - bottom: 10px;
}

.resume.resume - item: last - child {
    padding - bottom: 0;
}

.resume.resume - item:: before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border - radius: 50px;
    left: -9px;
    top: 0;
    background: #fff;
    border: 2px solid#305cd4;
}

/* .resume {
  max-height: 80vh;
  max-width: 80vw;
} */

/*--------------------------------------------------------------
# Skills
--------------------------------------------------------------*/

.services.icon - box {
    padding: 20px 15px;
    position: relative;
    overflow: hidden;
    background: #fff;
    box - shadow: 0 0 29px 0 rgba(68, 88, 144, 0.2);
    transition: all 0.3s ease -in -out;
    border - radius: 8px;
    text - align: center;
    z - index: 1;
}

.services.icon - box:: before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0;
    transition: ease -in -out 0.3s;
    z - index: -1;
}

.services.icon - box: hover:: before {
    background: #305cd4;
    height: 100 %;
    /* border-radius: 0px; */
}

/* .row {
  padding-bottom: 30px;
} */

.services.icon {
    /* margin: 0 auto 30px auto; */
    padding: 10px;
    font - size: 18px;
    background: #fff;
    color: #305cd4;
    /* margin-right: 6px; */
    border - radius: 50 %;
    text - align: center;
    transition: 0.3s;
    border: 1px solid#305cd4;
}

.services.icon i {
    font - size: 36px;
    line - height: 1;
    color: #fff;
}

.services.title {
    font - weight: 700;
    /* margin-bottom: 15px; */
    font - size: 18px;
}

.services.title a {
    color: #111;
}

.services.description {
    font - size: 15px;
    line - height: 24px;
    margin - bottom: 0;
}

.services.icon - box: hover.title a,
.services.icon - box: hover.description {
    color: #fff;
}

.services.icon - box: hover.icon {
    background: #fff;
}

.services.icon - box: hover.icon i {
    color: #305cd4;
}
.icons {
    padding: 15px;
}
.center {
    display: flex;
    flex - direction: column;
    align - items: center;
}

.center2 {
    display: flex;
    flex - direction: row;
    justify - content: center;
}
.resumebtn {
    color: black;
    border - radius: 25px;
    border: 2px solid #305cd4!important;
    font - size: 20px;
    min - height: 8vh;
    min - width: 20vw;
    font - style: bold;
}

.resumebtn: hover {
    border - bottom: 6px solid #305cd4!important;
}

.small {
    max - height: 30vh;
    font - size: 12px!important;
    width: 90px;
}

.fa - file {
    color: #305cd4;
    padding - right: 20px;
}
.blueicon {
    color: #305cd4;
    padding - left: 20px;
}

.whiteicon {
    color: white;
    padding - left: 20px;
}
.icon - box {
    height: 220px;
}

@media(max - width: 768px) {
  .services.icon - box:: before {
        bottom: 60 %;
    }
}

/*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
.portfolio.portfolio - item {
    margin - bottom: 30px;
}

.portfolio #portfolio - flters {
    padding: 0;
    margin: 0 auto 35px auto;
    list - style: none;
    text - align: center;
    background: #fff;
    border - radius: 50px;
    padding: 2px 15px;
    box - shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
}

.portfolio #portfolio - flters li {
    cursor: pointer;
    display: inline - block;
    padding: 10px 15px 8px 15px;
    font - size: 14px;
    font - weight: 600;
    line - height: 1;
    /* text-transform: uppercase; */
    color: #5a656e;
    margin - bottom: 5px;
    transition: all 0.3s ease -in -out;
}

.portfolio #portfolio - flters li: hover,
.portfolio #portfolio - flters li.filter - active {
    color: #305cd4;
}

.portfolio #portfolio - flters li: last - child {
    margin - right: 0;
}

.portfolio.portfolio - wrap {
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z - index: 1;
}

.portfolio.portfolio - wrap:: before {
    content: "";
    background: rgba(44, 73, 100, 0.6);
    position: absolute;
    left: 30px;
    right: 30px;
    top: 30px;
    bottom: 30px;
    transition: all ease -in -out 0.3s;
    z - index: 2;
    opacity: 0;
}

.portfolio.portfolio - wrap.portfolio - info {
    opacity: 0;
    position: absolute;
    top: 10 %;
    left: 0;
    right: 0;
    text - align: center;
    z - index: 3;
    transition: all ease -in -out 0.3s;
}

.portfolio.portfolio - wrap.portfolio - info h4 {
    font - size: 20px;
    color: #fff;
    font - weight: 600;
}

.portfolio.portfolio - wrap.portfolio - info {
    color: #ffffff;
    font - size: 14px;
    /* text-transform: uppercase; */
}

.portfolio.portfolio - wrap.portfolio - links {
    opacity: 0;
    left: 0;
    right: 0;
    bottom: 10 %;
    text - align: center;
    z - index: 3;
    position: absolute;
    transition: all ease -in -out 0.3s;
}

.portfolio.portfolio - wrap.portfolio - links a {
    color: #fff;
    margin: 0 2px;
    font - size: 28px;
    display: inline - block;
    transition: 0.3s;
}

.portfolio.portfolio - wrap: hover:: before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
}

.portfolio.portfolio - wrap: hover.portfolio - info {
    opacity: 1;
    top: calc(50 % - 48px);
}

.portfolio.portfolio - wrap: hover.portfolio - links {
    opacity: 1;
    bottom: calc(50 % - 50px);
}

/* @media only screen and (max-width: 480px) {
  .projectdisplay {
    opacity: 0.4;
  }
  h4,
  div {
    opacity: 1 !important;
  }
  .portfolio-info {
    background: rgba(20, 54, 85, 0.651) !important;
    padding: 25px 0px 25px 0px !important;
  }
} */

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio - details {
    padding - top: 30px;
}

.portfolio - details.portfolio - details - container {
    position: relative;
}

.portfolio - details.portfolio - details - carousel {
    position: relative;
    z - index: 1;
}

.portfolio - details.portfolio - details - carousel.owl - nav,
.portfolio - details.portfolio - details - carousel.owl - dots {
    margin - top: 5px;
    text - align: left;
}

.portfolio - details.portfolio - details - carousel.owl - dot {
    display: inline - block;
    margin: 0 10px 0 0;
    width: 12px;
    height: 12px;
    border - radius: 50 %;
    background - color: #ddd!important;
}

.portfolio - details.portfolio - details - carousel.owl - dot.active {
    background - color: #305cd4!important;
}

.portfolio - details.portfolio - info {
    padding: 30px;
    position: absolute;
    right: 0;
    bottom: -70px;
    background: #fff;
    box - shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    z - index: 2;
}

.portfolio - details.portfolio - info {
    font - size: 22px;
    font - weight: 700;
    margin - bottom: 20px;
    padding - bottom: 20px;
    border - bottom: 1px solid #eee;
}

.portfolio - details.portfolio - info ul {
    list - style: none;
    padding: 0;
    font - size: 15px;
}

.portfolio - details.portfolio - info ul li + li {
    margin - top: 10px;
}

.portfolio - details.portfolio - description {
    padding - top: 50px;
}

.portfolio - details.portfolio - description h2 {
    width: 50 %;
    font - size: 26px;
    font - weight: 700;
    margin - bottom: 20px;
}

.portfolio - details.portfolio - description p {
    padding: 0 0 0 0;
}

@media(max - width: 768px) {
  .portfolio - details.portfolio - description h2 {
        width: 100 %;
    }
  .portfolio - details.portfolio - info {
        position: static;
        margin - top: 30px;
    }
}

/*--------------------------------------------------------------
# Testimonials
--------------------------------------------------------------*/
.testimonials.testimonial - item {
    box - sizing: content - box;
    min - height: 320px;
}

.testimonials.testimonial - item.testimonial - img {
    width: 90px;
    border - radius: 50 %;
    margin: -40px 0 0 40px;
    position: relative;
    z - index: 2;
    border: 6px solid #fff;
    box - shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}

.testimonials.testimonial - item {
    font - size: 18px;
    font - weight: bold;
    /* margin: 10px 0 5px 45px; */
    color: #2c4964;
}

.testimonials.testimonial - item h4 {
    font - size: 14px;
    color: #6b96be;
    margin: 0 0 0 45px;
}

.testimonials.testimonial - item.quote - icon - left,
.testimonials.testimonial - item.quote - icon - right {
    color: #f7d9e6;
    font - size: 26px;
}

.testimonials.testimonial - item.quote - icon - left {
    display: inline - block;
    left: -5px;
    position: relative;
}

.testimonials.testimonial - item.quote - icon - right {
    display: inline - block;
    right: -5px;
    position: relative;
    top: 10px;
}

.testimonials.testimonial - item {
    font - style: italic;
    margin: 0 15px 0 15px;
    padding: 20px 20px 60px 20px;
    background: #fff;
    position: relative;
    border - radius: 6px;
    position: relative;
    z - index: 1;
    box - shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

.testimonials.owl - nav,
.testimonials.owl - dots {
    margin - top: 5px;
    text - align: center;
}

.testimonials.owl - dot {
    display: inline - block;
    margin: 0 5px;
    width: 12px;
    height: 12px;
    border - radius: 50 %;
    background - color: #ddd!important;
}

.testimonials.owl - dot.active {
    background - color: #305cd4!important;
}

@media(max - width: 767px) {
  .testimonials {
        margin: 30px 10px;
    }
}

/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact.contact - about {
    font - size: 36px;
    margin: 0 0 10px 0;
    padding: 0;
    line - height: 1;
    font - weight: 300;
    letter - spacing: 3px;
    text - transform: uppercase;
    color: #305cd4;
}

.contact.contact - about {
    font - size: 14px;
    line - height: 24px;
    color: #3c6387;
}

.contact.social - links {
    padding - bottom: 20px;
}

.contact.social - links a {
    font - size: 18px;
    background: #fff;
    color: #305cd4;
    padding: 10px 12px;
    margin - right: 6px;
    border - radius: 50 %;
    text - align: center;
    transition: 0.3s;
    border: 1.5px solid#305cd4;
}

.contact.social - links a: hover {
    background: #305cd4;
    color: #fff;
}

.social: hover {
    background - color: #305cd4;
}

.contact.info {
    color: #5a656e;
}

.contact.info i {
    font - size: 32px;
    color: #305cd4;
    float: left;
    line - height: 1;
}

.contact.info {
    padding: 0 0 10px 42px;
    line - height: 28px;
    font - size: 14px;
}

.contact.php - email - form.validate {
    display: none;
    color: red;
    margin: 0 0 15px 0;
    font - weight: 400;
    font - size: 13px;
}

.contact.php - email - form.error - message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text - align: left;
    padding: 15px;
    font - weight: 600;
}

.contact.php - email - form.error - message br + br {
    margin - top: 25px;
}

.contact.php - email - form.sent - message {
    display: none;
    color: #fff;
    background: #18d26e;
    text - align: center;
    padding: 15px;
    font - weight: 600;
}

.contact.php - email - form.loading {
    display: none;
    background: #fff;
    text - align: center;
    padding: 15px;
}

.contact.php - email - form.loading: before {
    content: "";
    display: inline - block;
    border - radius: 50 %;
    width: 24px;
    height: 24px;
    margin: 0 10px - 6px 0;
    border: 3px solid #18d26e;
    border - top - color: #eee;
    -webkit - animation: animate - loading 1s linear infinite;
    animation: animate - loading 1s linear infinite;
}

.contact.php - email - form input,
.contact.php - email - form textarea {
    border - radius: 0;
    box - shadow: none;
    font - size: 14px;
}

.contact.php - email - form input: focus,
.contact.php - email - form textarea: focus {
    border - color: #305cd4;
}

.contact.php - email - form button[type = "submit"] {
    background: #305cd4;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border - radius: 50px;
}

.contact.php - email - form button[type = "submit"]: hover {
    background: #1d3a8a;
}

.calltoaction {
    margin: 20px;
}

.mainbuttons {
    border - radius: 25px;
    font - size: 20px;
    min - height: 8vh;
    width: 200px;
}

.mainbuttons: hover {
    border - bottom: 6px solid white!important;
}

@-webkit - keyframes animate - loading {
    0 % {
        transform: rotate(0deg);
    }
    100 % {
        transform: rotate(360deg);
    }
}

@keyframes animate - loading {
    0 % {
        transform: rotate(0deg);
    }
    100 % {
        transform: rotate(360deg);
    }
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
    background: #fff;
    padding: 24px 0;
    font - size: 14px;
    box - shadow: 0px 0 20px 0 rgba(0, 0, 0, 0.12);
}

#footer.copyright {
    text - align: center;
}

#footer.credits {
    padding - top: 8px;
    text - align: center;
    font - size: 13px;
}
