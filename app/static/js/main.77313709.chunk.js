(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(6),s=t.n(r),i=(t(14),t(2)),l=t(0);var c=function(e){function a(){return e.required?Object(l.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1 mb-2",children:"Required"}):null}function t(){return e.header?Object(l.jsx)("h3",{className:"text-2xl font-bold text-blueGray-600 pb-5 text-center",children:e.header}):Object(l.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1 mb-2",children:e.label})}return Object(l.jsxs)("div",{children:[Object(l.jsx)(t,{}),Object(l.jsx)(a,{}),Object(l.jsx)("input",{type:"text",value:e.value,onChange:function(a){a.preventDefault(),e.setVal(a.target.value)},placeholder:e.placeholder,className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"})]})};var u=function(e){var a=e.searchResults.map((function(a,t){return Object(l.jsx)("div",{className:"cursor-pointer py-3 px-2 shadow-sm",onClick:function(){return e.onClickResult(a)},children:a},t)}));function t(){return e.searchResults.length>0?Object(l.jsx)("div",{className:"bg-white text-blueGray-600 rounded text-sm shadow h-36 overflow-auto",children:a}):null}return Object(l.jsx)("div",{children:Object(l.jsx)(t,{})})};var d=function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),o=t[0],r=t[1];return Object(n.useEffect)((function(){if(e.value.length>0){var a=e.options.filter((function(a){return a.toLowerCase().indexOf(e.value.toLowerCase())>-1}));a.length>0&&a[0]!==e.value&&r(a)}}),[e.value,e.options]),Object(l.jsxs)("div",{children:[Object(l.jsx)(c,{label:e.label,placeholder:e.placeholder,value:e.value,setVal:e.setVal,required:!0}),Object(l.jsx)(u,{searchResults:o,onClickResult:function(a){e.setVal(a),r([])}})]})},p=t(9),h=t(7);var b=function(e){var a=Object(n.useState)(["Pop","Party","Disco"]),t=Object(i.a)(a,2),o=t[0],r=t[1],s=Object(n.useState)(""),d=Object(i.a)(s,2),b=d[0],j=d[1],m=Object(n.useState)([]),g=Object(i.a)(m,2),x=g[0],C=g[1];Object(n.useEffect)((function(){r(h.genres)}),[]);var O=e.genres.map((function(a,t){return Object(l.jsxs)("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-white bg-blueGray-500 uppercase last:mr-0 mr-1 mb-2",children:[a,Object(l.jsx)("span",{className:"cursor-pointer py-1 px-2",onClick:function(){return function(a){var t=e.genres.filter((function(e){return e.toLowerCase()!==a.toLowerCase()}));e.setGenres(t)}(a)},children:" x"})]},t)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)(c,{label:"Genres",placeholder:"Dance",value:b,setVal:function(e){j(e);var a=o.filter((function(e){return e.toLowerCase().indexOf(b.toLowerCase())>-1}));C(a)}}),Object(l.jsx)(u,{searchResults:x,onClickResult:function(a){j(""),e.genres.includes(a)||e.setGenres([].concat(Object(p.a)(e.genres),[a])),C([])}}),Object(l.jsx)("div",{className:"mt-2",children:O})]})};var j=function(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),o=t[0],r=t[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),p=u[0],h=u[1],j=Object(n.useState)(""),m=Object(i.a)(j,2),g=m[0],x=m[1],C=Object(n.useState)([]),O=Object(i.a)(C,2),f=O[0],v=O[1],y=Object(n.useState)(""),k=Object(i.a)(y,2),S=k[0],R=k[1];function w(a){a.preventDefault(),e.cities.includes(p)&&e.cities.includes(g)?(r(!0),fetch("/search?"+new URLSearchParams({origin:p,destination:g,genres:f,keywords:S})).then((function(e){return e.json()})).then((function(a){console.log(a),e.setError(a.error),e.setResults(a.playlist),r(!1)})).catch((function(a){console.log(a),e.setError("Error: Check your network connection or inputs."),r(!1)}))):e.setError("Error: Make sure you clicked on cities in the dropdown.")}function N(){return o?Object(l.jsx)("button",{className:"opacity-50 cursor-not-allowed bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 mt-10",type:"button",children:"Loading..."}):Object(l.jsx)("button",{onClick:w,className:"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 mt-10",type:"button",children:"Generate Playlist"})}return Object(l.jsx)("div",{className:"InputForm container mx-auto lg:px-10 lg:pt-20 relative top-5 ",children:Object(l.jsx)("div",{className:"mb-3 bg-gray-50 rounded-md shadow-lg",children:Object(l.jsxs)("form",{className:"px-10 py-10",children:[Object(l.jsx)("div",{className:"grid gap-4 grid-cols-",children:Object(l.jsx)(c,{label:"Input",placeholder:"School, class, books, study...",value:S,setVal:R,header:"Input any words to shape the theme of your playlist."})}),Object(l.jsx)("p",{className:"text-blueGray-500 pb-5 mt-5",children:"Where are you going? Please make sure you click on cities and genres from the dropdowns with your mouse."}),Object(l.jsxs)("div",{className:"grid gap-4 grid-cols-2",children:[Object(l.jsx)(d,{options:e.cities,label:"Origin",placeholder:"New York",value:p,setVal:h}),Object(l.jsx)(d,{options:e.cities,label:"Destination",placeholder:"Chicago",value:g,setVal:x})]}),Object(l.jsx)("div",{className:"grid gap-4 grid-cols-1 mt-5",children:Object(l.jsx)(b,{genres:f,setGenres:v})}),Object(l.jsx)(N,{})]})})})};var m=function(e){var a=e.songProps[0],t=e.songProps[1],n=e.songProps[2];return Object(l.jsx)("div",{className:"mb-3 bg-white rounded-md shadow lg:px-5 lg:py-5 lg:w-2/3 mx-auto",children:Object(l.jsxs)("div",{className:"grid lg:grid-cols-6 lg:gap-1",children:[Object(l.jsx)("div",{className:"test",children:Object(l.jsx)("div",{className:"items-center h-14 w-14 justify-center",children:Object(l.jsx)("p",{className:"text-center leading-10 mt-1 text-blueGray-400 text-xl font-light",children:e.index+1})})}),Object(l.jsxs)("div",{className:"lg:col-span-4",children:[Object(l.jsx)("h4",{className:"font-sans font-semibold text-2xl",children:a}),Object(l.jsx)("h5",{className:"font-sans text-xl",children:t})]}),Object(l.jsx)("div",{className:"score-container",children:Object(l.jsx)("h5",{className:"font-sans text-xl",children:n})})]})})};var g=function(e){var a=e.results.map((function(e,a){return Object(l.jsx)(m,{songProps:e,index:a},a)}));function t(){return e.error?Object(l.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1",children:e.error}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"font-customStack text-4xl pb-3 text-center lg:pt-12 lg:pb-12",children:"\ud83c\udfb6 your playlist"}),Object(l.jsxs)("div",{className:"grid lg:grid-cols-6 lg:gap-1 mb-3 bg-white lg:px-5 lg:py-5 lg:w-2/3 mx-auto",children:[Object(l.jsx)("div",{children:"Rank"}),Object(l.jsx)("div",{className:"lg:col-span-4",children:"Song"}),Object(l.jsx)("div",{children:"Score"})]})]})}return Object(l.jsxs)("div",{className:"mb-3 bg-white rounded-md shadow-lg lg:px-5 lg:py-5 lg:w-2/3 mx-auto",children:[Object(l.jsx)(t,{}),Object(l.jsx)("div",{children:a})]})};var x=function(){return Object(l.jsxs)("div",{className:"mt-3 lg:px-5 lg:py-5 lg:w-2/3 mx-auto text-center",children:[Object(l.jsx)("p",{children:"Team: Michael Noor (mn598), Joy Chen (jhc287), Jyne Dunbar (jcd322), Rachel Lu (rbl83), Vladia Trinh (vt95)"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("a",{className:"underline",href:"https://traffic-jams-v1.herokuapp.com/",children:"Prototype 1"})," | ",Object(l.jsx)("a",{className:"underline",href:"https://traffic-jams-v2.herokuapp.com/",children:"Prototype 2"})," | ",Object(l.jsx)("a",{className:"underline",href:"https://traffic-jams.herokuapp.com/",children:"Prototype 3"})]})]})},C=t(8);var O=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)("Type in a query to get started"),s=Object(i.a)(r,2),c=s[0],u=s[1],d=Object(n.useState)(["Chicago","New York"]),p=Object(i.a)(d,2),h=p[0],b=p[1];return Object(n.useEffect)((function(){b(C.cities)}),[]),Object(l.jsxs)("div",{className:"App bg-blueGray-100",children:[Object(l.jsxs)("div",{className:"bg-hero-custom bg-center container mx-auto lg:px-40",children:[Object(l.jsxs)("div",{className:"bg-white px-8 py-6 w-max -mt-2 rounded-md shadow-lg",children:[Object(l.jsx)("h1",{className:"font-customStack text-4xl",children:"\ud83d\udea6 traffic jams"}),Object(l.jsx)("h2",{className:"text-2xl text-blueGray-600 mt-5",children:"Generate the perfect playlist for your roadtrip."})]}),Object(l.jsx)(j,{setResults:o,setError:u,cities:h})]}),Object(l.jsx)("div",{className:"-mt-5 lg:px-40 py-20",children:Object(l.jsx)(g,{error:c,results:t})}),Object(l.jsx)(x,{})]})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(a){var t=a.getCLS,n=a.getFID,o=a.getFCP,r=a.getLCP,s=a.getTTFB;t(e),n(e),o(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),f()},7:function(e){e.exports=JSON.parse('{"genres":["Music","Acoustic Blues","Chicago Blues","Classic Blues","Contemporary Blues","Country Blues","Delta Blues","Electric Blues","Novelty","Standup Comedy","Lullabies","Sing-Along","Stories","Impressionist","Medieval Era","Minimalism","Modern Era","Opera","Orchestral","Renaissance","Romantic Era","Wedding Music","Art Song","Brass & Woodwinds","Solo Instrumental","Contemporary Era","Oratorio","Cantata","Electronic","Sacred","Guitar","Piano","Violin","Cello","Percussion","Classical Era","Avant-Garde","Baroque Era","Chamber Music","Chant","Choral","Classical Crossover","Early Music","Alternative Country","Americana","Bluegrass","Contemporary Bluegrass","Contemporary Country","Country Gospel","Thai Country","Honky Tonk","Outlaw Country","Traditional Bluegrass","Traditional Country","Urban Cowboy","Ambient","Downtempo","Electronica","IDM/Experimental","Industrial","Dubstep","Bass","Chanukah","Christmas","Christmas: Children\'s","Christmas: Classic","Christmas: Classical","Christmas: Jazz","Christmas: Modern","Christmas: Pop","Christmas: R&B","Christmas: Religious","Christmas: Rock","Easter","Halloween","Holiday: Other","Thanksgiving","Alternative Folk","Contemporary Folk","Contemporary Singer/Songwriter","Folk-Rock","New Acoustic","Traditional Folk","Bebop","Big Band","Avant-Garde Jazz","Contemporary Jazz","Crossover Jazz","Dixieland","Fusion","Latin Jazz","Mainstream Jazz","Ragtime","Smooth Jazz","Vocal Jazz","Hard Bop","Trad Jazz","Cool","Contemporary Latin","Pop in Spanish","Raices","Latin Urban","Baladas y Boleros","Alternative & Rock in Spanish","Regional Mexicano","Salsa y Tropical","Environmental","Healing","Meditation","Nature","Relaxation","Travel","Yoga","Oldies","Adult Contemporary","Britpop","Pop/Rock","Soft Rock","Teen Pop","Tribute","Shows","C-Pop","Cantopop/HK-Pop","Korean Folk-Pop","Mandopop","Tai-Pop","Malaysian Pop","Pinoy Pop","Original Pilipino Music","Manilla Sound","Indo Pop","Thai Pop","Contemporary R&B","Disco","Doo Wop","Funk","Motown","Neo-Soul","Quiet Storm","Soul","Sound Effects","Foreign Cinema","Musicals","Original Score","Soundtrack","TV Soundtrack","Video Games","Breakbeat","Exercise","Garage","Hardcore","House","Jungle/Drum\'n\'bass","Techno","Trance","Alternative Rap","Dirty South","East Coast Rap","Gangsta Rap","Hardcore Rap","Hip-Hop","Latin Rap","Old School Rap","Rap","Underground Rap","West Coast Rap","UK Hip Hop","Chinese Hip-Hop","Korean Hip-Hop","Arabesque","Afrikaans","Farsi","Israeli","Flamenco","Tango","Fado","Iberia","Russian","Turkish","Afro-Beat","Afro-Pop","Cajun","Celtic","Celtic Folk","Contemporary Celtic","Drinking Songs","Japanese Pop","Klezmer","Polka","Traditional Celtic","Worldbeat","Zydeco","Caribbean","South America","North America","Hawaii","Australia","Japan","France","Africa","Asia","Europe","South Africa","Russian Chanson","Dini","Halk","Sanat","Dangdut","Indonesian Religious","Calypso","Soca","EMO","Pop Punk","Indie Pop","Chinese Alt","Korean Indie","College Rock","Goth Rock","Grunge","Indie Rock","New Wave","Punk","Adult Alternative","American Trad Rock","Arena Rock","Blues-Rock","British Invasion","Death Metal/Black Metal","Glam Rock","Hair Metal","Hard Rock","Heavy Metal","Jam Bands","Prog-Rock/Art Rock","Psychedelic","Rock & Roll","Rockabilly","Roots Rock","Singer/Songwriter","Southern Rock","Surf","Tex-Mex","Chinese Rock","Korean Rock","CCM","Christian Metal","Christian Pop","Christian Rap","Christian Rock","Classic Christian","Contemporary Gospel","Gospel","Praise & Worship","Southern Gospel","Traditional Gospel","Standards","Traditional Pop","Vocal Pop","Trot","Dancehall","Roots Reggae","Dub","Ska","Lovers Rock","Lounge","Swing","Blues","Comedy","Children\'s Music","Classical","Country","Holiday","Folk","Jazz","Marching Bands","Latin","New Age","Pop","R&B/Soul","Dance","Hip Hop/Rap","World","Alternative","Rock","Christian & Gospel","Vocal","Reggae","Easy Listening","J-Pop","Enka","Anime","Kayokyoku","Fitness & Workout","K-Pop","Karaoke","Instrumental","Hip-Hop/Rap","Brazilian","Inspirational","Arabic","Cuban","Spoken Word","Disney","French Pop","German Pop","German Folk","Chinese","Korean","Indian","Ax\xe9","Bossa Nova","Choro","Forr\xf3","Frevo","MPB","Pagode","Samba","Sertanejo","Baile Funk","Khaleeji","North African","Arabic Pop","Islamic","Chinese Classical","Chinese Flute","Chinese Opera","Chinese Orchestral","Chinese Regional Folk","Chinese Strings","Taiwanese Folk","Tibetan Native Music","Korean Classical","Korean Trad Song","Korean Trad Instrumental","Korean Trad Theater","indian / regional indian / punjabi / punjabi pop","Indian Pop","Punjabi Pop","Rabindra Sangeet","Bollywood","Tamil","Telugu","Regional Indian","Devotional & Spiritual","Sufi","Indian Classical","Ghazals","Indian Folk","Cantopop","Modern Dancehall","Korean Traditional","Cuban / Mambo","Cuban / Son","Cuban / Bolero"]}')},8:function(e){e.exports=JSON.parse('{"cities":["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose","Austin","Jacksonville","Fort Worth","Columbus","Charlotte","San Francisco","Indianapolis","Seattle","Denver","Washington DC","Boston","El Paso","Nashville","Detroit","Oklahoma City","Portland","Las Vegas","Memphis","Louisville","Baltimore","Milwaukee","Albuquerque","Tucson","Fresno","Mesa","Sacramento","Atlanta","Kansas City","Colorado Springs","Omaha","Raleigh","Miami","Long Beach","Virginia Beach","Oakland","Minneapolis","Tulsa","Tampa","Arlington","New Orleans","Wichita","Bakersfield","Cleveland","Aurora","Anaheim","Honolulu","Santa Ana","Riverside","Corpus Christi","Lexington","Henderson","Stockton","Saint Paul","Cincinnati","St Louis","Pittsburgh","Greensboro","Lincoln","Anchorage","Plano","Orlando","Irvine","Newark","Durham","Chula Vista","Toledo","Fort Wayne","St Petersburg","Laredo","Jersey City","Chandler","Madison","Lubbock","Scottsdale","Reno","Buffalo","Gilbert","Glendale","North Las Vegas","Winston Salem","Chesapeake","Norfolk","Fremont","Garland","Irving","Hialeah","Richmond","Boise","Spokane","Baton Rouge"]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.77313709.chunk.js.map