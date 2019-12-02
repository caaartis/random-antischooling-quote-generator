//immediate invoked function expression
//immediate invoked function expression
(function(){

    const quotes=[
  
      {
        quote:"It is, in fact, nothing short of a miracle that the modern methods of education have not yet entirely strangled the holy curiosity of inquiry; for this delicate  plant, aside from stimulation, stands mainly in need of freedom; without this it goes to wrack and ruin without fail. It is a very grave mistake to think that the enjoyment of seeing and searching can be promoted by means of coercion and a sense of duty.",
        author: "Albert Einstein",
        imageurl: "https://news.rutgers.edu/sites/medrel/files/inline-img/Einstein%20C%20from%20shutterstock.jpeg"
  
      }, {
        quote:"Knowledge that is acquired under compulsion obtains no hold on the mind.",
        author: "Plato",
        imageurl:"https://cdn.britannica.com/88/149188-050-05FF7D99/Plato-portrait-bust-original-Capitoline-Museums-Rome.jpg"},
  
        {
          quote:"Reward and punishment is the lowest form of education.",
          author: "Chuang Tzu",
          imageurl: "https://i.pinimg.com/originals/1d/10/b7/1d10b77efcebefef1c3c32b1e628acf1.jpg"
    
        },
  
        {
          quote:"Education consists mainly in what we have unlearned.",
          author: "Mark Twain",
          imageurl: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1873,w_3340,x_0,y_77/f_auto,q_auto,w_1100/v1554736973/shape/mentalfloss/539787-gettyimages-2504374.jpg"
    
        }, {
          quote:"I have nevere let my schooling interfere with my education",
          author: "Mark Twain",
          imageurl: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1873,w_3340,x_0,y_77/f_auto,q_auto,w_1100/v1554736973/shape/mentalfloss/539787-gettyimages-2504374.jpg"
    
        },
  
        {
          quote:"The whole theory of modern education is radically unsound. Fortunately in England, at any rate, education produces no effect whatsoever. If it did, it would prove a serious danger to the upper classes, and probably lead to acts of violence.",
          author: "Oscar Wilde",
          imageurl: "https://www.biography.com/.image/t_share/MTI1MjM3OTAwMDM1MDA0ODk0/oscar-wildejpg.jpg"
    
        },{
          quote:"Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught.",
          author: "Oscar Wilde",
          imageurl: "https://www.biography.com/.image/t_share/MTI1MjM3OTAwMDM1MDA0ODk0/oscar-wildejpg.jpg"
    
        },{
          quote:"I loathed every day and regret every moment I spent in a school..",
          author: "Wood Allen",
          imageurl: "https://pmcvariety.files.wordpress.com/2018/06/woody-allen.jpg?w=1000"
  
    
        },{
          quote:"I hated school. Even to this day, when I see a school bus it's just depressing to me. The poor little kids.",
          author: "Dolly Parton",
          imageurl: "https://www.biography.com/.image/t_share/MTY2NzI0Mjk3MjMzMDE2MTAw/dolly-parton-9434112-1-raw.jpg"
    
        },{
          quote:"There is nothing on earth intended for innocent people so horrible as a school.",
          author: "George Bernard Shaw",
          imageurl: "https://www.nobelprize.org/images/shaw-12939-portrait-medium.jpg"
    
        },{
          quote:"What we call education and culture is for the most part nothing but the substitution of reading for experience, of literature for life, of the obsolete fictitious for the contemporary real.",
          author: "George Bernard Shaw",
          imageurl: "https://www.nobelprize.org/images/shaw-12939-portrait-medium.jpg"
    
        },{
          quote:"What does education often do? It makes a straight-cut ditch of a free, meandering brook.",
          author: "Henry David Thoreau",
          imageurl: "https://images2.minutemediacdn.com/image/upload/c_crop,h_842,w_1496,x_0,y_73/f_auto,q_auto,w_1100/v1555006666/shape/mentalfloss/benjamin_d._maxham_-_henry_david_thoreau_-_restored.jpg"
    
        },{
          quote:"How could youths better learn to live than by at once trying the experiment of living?",
          author: "Henry David Thoreau",
          imageurl: "https://images2.minutemediacdn.com/image/upload/c_crop,h_842,w_1496,x_0,y_73/f_auto,q_auto,w_1100/v1555006666/shape/mentalfloss/benjamin_d._maxham_-_henry_david_thoreau_-_restored.jpg"
    
        },{
          quote:"Men are born ignorant, not stupid; they are made stupid by education.",
          author: "Bertrand Russell",
          imageurl: "https://i0.wp.com/www.brainpickings.org/wp-content/uploads/2015/01/bertrandrussell.jpg?w=680&ssl=1"
    
        },{
          quote:"Education is one of the chief obstacles to intelligence and freedom of thought.",
          author: "Bertrand Russell",
          imageurl: "https://i0.wp.com/www.brainpickings.org/wp-content/uploads/2015/01/bertrandrussell.jpg?w=680&ssl=1"
    
        },{
          quote:"He was so learned that he could name a horse in nine languages; so ignorant that he bought a cow to ride on.",
          author: "Benjamin Franklin",
          imageurl: "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2NTIxNzUwNjAxODY4NTEx/benjamin-franklin_editedjpg.jpg"
    
        },{
          quote:"The average schoolmaster is and always must be essentially an ass, for how can one imagine an intelligent man engaging in so puerile an avocation.",
          author: "H.L. Mencken",
          imageurl: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2017/04/hl-mencken-on-the-american-public.jpg"
  
    
        },{
          quote:"Education is a weapon, whose effect depends on who holds it in his hands and at whom it is aimed.",
          author: "Josef Stalin",
          imageurl: "https://www.biography.com/.image/t_share/MTY2NjgyOTkyNTMyNTMwMjMx/gettyimages-2637237.jpg"
    
        },{
          quote:"The vanity of teaching doth oft tempt a man to forget that he is a blockhead..",
          author: "George Savile",
          imageurl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/George_Saville_2014.jpg"
    
        },{
          quote:"Education is a state-controlled manufactory of echoes.",
          author: "Norman Douglas",
          imageurl: "https://news.rutgers.edu/sites/medrel/files/inline-img/Einstein%20C%20from%20shutterstock.jpeg"
    
        },{
          quote:"The best education consists in immunizing people against systematic attempts at education.",
          author: "Paul Karl Feyerabend",
          imageurl: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Paul_Feyerabend_Berkeley.jpg"
    
        },{
          quote:"A man who has never gone to school may steal from a freight car; but if he has a university education, he may steal the whole railroad.",
          author: "Theo Roosevelt",
          imageurl: "https://www.whitehouse.gov/wp-content/uploads/2017/12/26_theodore_roosevelt.jpg"
    
        },{
          quote:"But, good gracious, you've got to educate him first. You can't expect a boy to be vicious till he's been to a good school.",
          author: "H.H. Munro",
          imageurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hector_Hugh_Munro.jpg/220px-Hector_Hugh_Munro.jpg"
  
  
  
    
        },{
          quote:"Education is hanging around until you've caught on.",
          author: "Robert Frost",
          imageurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Jb_modern_frost_2_e.jpg/180px-Jb_modern_frost_2_e.jpg"
    
        },{
          quote:"Education is the period during which you are being instructed by somebody you do not know, about something you do not want to know.",
          author: "Gilbert K Chesterton",
          imageurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/G.K._Chesterton_at_the_age_of_17.jpg/220px-G.K._Chesterton_at_the_age_of_17.jpg"
    
        },{
          quote:"I wonder whether if I had an education I should have been more or less a fool than I am.",
          author: "Alice James",
          imageurl: "https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2017/08/alicejames2.jpg?resize=680%2C736&ssl=1"
    
        },{
          quote:"I pay the schoolmaster, but it is the schoolboys who educate my son.",
          author: "Ralph Waldo Emerson",
          imageurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/RWEmerson1859.jpg/170px-RWEmerson1859.jpg"
    
        },{
          quote:"Thank goodness I was never sent to school; it would have rubbed off some of the originality..",
          author: "Helen Beatrix Potter",
          imageurl: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNjYwMDY2ODMw/beatrix-potter-9445208-1-402.jpg"
    
        },{
          quote:"My grandmother wanted me to have an education, so she kept me out of school.",
          author: "Margaret Mead",
          imageurl: "https://d24fkeqntp1r7r.cloudfront.net/wp-content/uploads/2018/04/10203750/margaret-mead-copy.jpg"
    
        },{
          quote:"Anyone who has passed through the regular gradations of a classical education, and is not made a fool by it, may consider himself as having had a very narrow escape.",
          author: "William Hazlitt",
          imageurl: "https://spartacus-educational.com/PRhazlitt.JPG"
    
        },{
          quote:"Education is a method whereby one acquires a higher grade of prejudices.",
          author: "Laurence J Peter",
          imageurl: "https://images.gr-assets.com/authors/1314950364p4/182617.jpg"
    
        },{
          quote:"I am beginning to suspect all elaborate and special systems of education. They seem to me to be built up on the supposition that every child is a kind of idiot who must be taught to think.",
          author: "Anne Sullivan",
          imageurl: "https://www.perkins.org/sites/default/files/styles/image_gallery_5_3_full_width/public/sullivan.jpg?itok=BkqKqHv7"
    
        },
  
        {quote:"Drop out of school before your mind rots from exposure to our mediocre educational system. Forget about the Senior Prom and go to the library and educate yourself if you've got any guts. Some of you like Pep rallies and plastic robots who tell you what to read.”",
         author:"Frank Zappa",
         imageurl: "https://assets.jazziz.com/uploads/2019/08/frank-zappa-feature.jpg"
      }
  
  
  
  
        
  
      ];
      
      
      const btn =document.getElementById('generate-btn');
  
      btn.addEventListener('click',function(){
  
        let random=Math.floor(Math.random()*quotes.length);
        console.log(random);
  
       document.getElementById('quote').textContent=quotes[random].quote;
  
       document.querySelector('.author').textContent=quotes[random].author;
       
       document.querySelector(".quote-image-l3 img").src=quotes[random].imageurl;
      });
  })();