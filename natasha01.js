define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();
  
  //Randomly choose the attribute words from a larger list of attribute words.
  //Internal studies in Project Implicit found no difference in performance between the words.
  var posWords = API.shuffle([
            'Love', 'Cheer', 'Friend', 'Pleasure', 
            'Adore', 'Cheerful', 'Friendship', 'Joyful', 
            'Smiling','Cherish', 'Excellent', 'Glad', 
            'Joyous', 'Spectacular', 'Appealing', 'Delight', 
            'Excitement', 'Laughing', 'Attractive','Delightful', 
            'Fabulous', 'Glorious', 'Pleasing', 'Beautiful', 
            'Fantastic', 'Happy', 'Lovely', 'Terrific', 
            'Celebrate', 'Enjoy', 'Magnificent', 'Triumph']);
  var negWords = API.shuffle([
            'Abuse', 'Grief', 'Poison', 'Sadness', 
            'Pain', 'Despise', 'Failure', 'Nasty', 
            'Angry', 'Detest', 'Horrible', 'Negative', 
            'Ugly', 'Dirty', 'Gross', 'Evil', 
            'Rotten','Annoy', 'Disaster', 'Horrific',  
            'Scorn', 'Awful', 'Disgust', 'Hate', 
            'Humiliate', 'Selfish', 'Tragic', 'Bothersome', 
            'Hatred', 'Hurtful', 'Sickening', 'Yucky']);
  
    return iatExtension({
        category1 : {
            name : 'Black people', //Will appear in the data.
            title : {
                media : {word : 'Black people'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'bm1_nc.jpg'},
                {image: 'bm2_nc.jpg'},
                {image: 'bm3_nc.jpg'},
				{image: 'bf1_nc.jpg'},
                {image: 'bf2_nc.jpg'},                 
				{image: 'bf3_nc.jpg'}     
    	    ],
    		//Stimulus css (style)
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 :    {
            name : 'White people', //Will appear in the data.
            title : {
                media : {word : 'White people'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'wm1_nc.jpg'},
                {image: 'wm2_nc.jpg'},
                {image: 'wm3_nc.jpg'},
				{image: 'wf1_nc.jpg'},
            	{image: 'wf2_nc.jpg'},
            	{image: 'wf3_nc.jpg'}
            ],
    		//Stimulus css (style)
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
		attribute1 :
		{
			name : 'Bad',
			title : {
				media : {word : 'Bad'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: negWords[0]},
				{word: negWords[1]},
				{word: negWords[2]},
				{word: negWords[3]},
				{word: negWords[4]},
				{word: negWords[5]},
				{word: negWords[6]},
				{word: negWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Good',
			title : {
				media : {word : 'Good'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: posWords[0]},
				{word: posWords[1]},
				{word: posWords[2]},
				{word: posWords[3]},
				{word: posWords[4]},
				{word: posWords[5]},
				{word: posWords[6]},
				{word: posWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
	    		showDebriefing:true, //Show feedback in the last trial? Relevant only in a Qualtrics IAT because in Qualtrics we cannot access the saved feedback and IAT score later in the survey.
			//Texts for the trials that show the debriefing.
			preDebriefingText : 'Press space to see your result', //Text in the trial that comes before showing the debriefing.
			preDebriefingTouchText : 'Touch the bottom green area to see your result', //Touch version for the text in the trial that comes before showing the debriefing.
			debriefingTextTop : 'Your result:', //Will be shown above the feedback text.
			//ATTENTION: We do not recommend showing participants their results. The IAT is a typical psychological measure so it is not very accurate. 
			//In Project Implicit's website, you can see that we added much text to explain that there is still much unknown about the meaning of these results.
			//We strongly recommend that you provide all these details in the debriefing of the experiment.
			debriefingTextBottom : 'This result is not a definitive assessment of your attitudes. It is provided for educational purposes only.  Press space to continue.', //Will be shown below the feedback text. 
           		debriefingTextBottomTouch : 'This result is not a definitive assessment of your attitudes. It is provided for educational purposes only.  Touch the green area to continue.',
  		  },
	        
	    
        base_url : {//Where are your images at? You might want to copy the photos to your own server
            image : 'https://baranan.github.io/minno-tasks/images/'
        }
    });
});
