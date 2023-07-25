var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"Intro"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Intro":[["^Blackness","\n","^???: Hello? Friend? Your readings indicate you should be awake by now.","\n",["ev",{"^->":"Intro.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Open your eyes",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Intro.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^You open your eyes and are able to see the robot cat. You notice you're in a futuristic shack.","\n","^P1-USH: Ah, finally! That took a lot longer than usual. I was getting a bit worried.","\n",{"->":"Intro_2"},{"#f":5}]}],{"#f":1}],"Intro_2":[{"->":"Intro_2_questions"},{"#f":1}],"Intro_2_questions":[[["ev",{"^->":"Intro_2_questions.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^What is going on? Where am I?",{"->":"$r","var":true},null]}],["ev",{"^->":"Intro_2_questions.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Who are you? What are you?",{"->":"$r","var":true},null]}],["ev",{"^->":"Intro_2_questions.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Just need to walk around for a little. (Exit)",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Intro_2_questions.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^P1-USH: What do you mean? You’re back home! Would you like me to start off the day with your morning tunes? How about your favorite game?","\n",{"->":"Intro_2"},{"#f":5}],"c-1":["ev",{"^->":"Intro_2_questions.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^P1-USH: You don’t remember me? I’m P1-USH, your at-home entertainment and social system! Would you like me to start off the day with your morning tunes? How about your favorite game?","\n",{"->":"Intro_2"},{"#f":5}],"c-2":["ev",{"^->":"Intro_2_questions.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^You walk around the cabin and interact with some objects","\n",{"->":"Interactables"},{"#f":5}]}],{"#f":1}],"Interactables":[{"->":"Interactable_2"},{"#f":1}],"Interactable_2":[[["ev",{"^->":"Interactable_2.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Conveyor",{"->":"$r","var":true},null]}],["ev",{"^->":"Interactable_2.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Cloning Vat",{"->":"$r","var":true},null]}],["ev",{"^->":"Interactable_2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Window",{"->":"$r","var":true},null]}],"ev","str","^Door","/str",{"VAR?":"interact"},3,"==","/ev",{"*":".^.c-3","flg":21},{"c-0":["ev",{"^->":"Interactable_2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^An opening where food from the greenhouse arrives. The growing and harvesting process seems to be automated.","\n","ev",{"VAR?":"interact"},1,"+",{"VAR=":"interact","re":true},"/ev",{"->":"Interactables"},{"#f":5}],"c-1":["ev",{"^->":"Interactable_2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^A large machine with glowing liquid inside. One of the panels on the side is missing and computer components are exposed.","\n","ev",{"VAR?":"interact"},1,"+",{"VAR=":"interact","re":true},"/ev",{"->":"Interactables"},{"#f":5}],"c-2":["ev",{"^->":"Interactable_2.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^A paper is stuck to the window, with a crude drawing of what could be assumed to be the cabin on the left, and a large building without features on the right has been circled. Out the window, a matching building can be seen in the distance far beyond the trees. You remove the paper and take it with you.","\n","ev",{"VAR?":"interact"},1,"+",{"VAR=":"interact","re":true},"/ev",{"->":"Interactables"},{"#f":5}],"c-3":["\n","^You approach the door to open it.","\n",{"->":"Door"},{"#f":5}]}],{"#f":1}],"Door":[["^P1-USH: Wait! Do you remember what’s out there?","\n",["ev",{"^->":"Door.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^What’s out there?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Door.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^P1-USH: You shouldn’t be out in the forest. You should stay here where it’s safe. If you need anything, you can let me know and the cabin can make it","\n",{"->":"door2"},{"#f":5}]}],{"#f":1}],"door2":[["ev","str","^I just need some fresh air.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Player goes outside and north. Encounters weird mechanical deer thing. Dies in 1 hit.","\n","^Player wakes up back in cabin.","\n","^P1-USH: Hello Friend! I’m glad you’re back.","\n",{"->":"After_death"},{"#f":5}]}],{"#f":1}],"After_death":[{"->":"After_death_options"},{"#f":1}],"After_death_options":[["ev","str","^How am I still alive?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^My old body?","/str",{"VAR?":"body"},"/ev",{"*":".^.c-1","flg":21},"ev","str","^What was that outside?","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^It killed me!","/str",{"VAR?":"death"},"/ev",{"*":".^.c-3","flg":21},"ev","str","^Can I have a weapon?","/str","/ev",{"*":".^.c-4","flg":20},"ev","str","^I should get up.","/str","/ev",{"*":".^.c-5","flg":20},{"c-0":["\n","^P1-USH: Still don’t remember? With that cloning machine right over there you don’t ever have to worry about dying. Using samples of your DNA from your previous body, it can replicate you along with all your memories. I’m not sure why you didn’t keep your memories last time","\n","ev",1,"/ev",{"VAR=":"body","re":true},{"->":"After_death"},{"#f":5}],"c-1":["\n","^P1-USH: Yup! It gets cleaned up while I wait for you to wake up, so you don’t need to worry about it. Anything you had with you will be set aside for you to pick back up.","\n",{"->":"After_death"},{"#f":5}],"c-2":["\n","^P1-USH: Oh! That was a power-gathering model. Of course, all the units outside are also programmed with the retrieval protocol, to ensure you stay safe in your home.","\n","ev",1,"/ev",{"VAR=":"death","re":true},{"->":"After_death"},{"#f":5}],"c-3":["\n","^P1-USH: It did. Allowing it to bring you back here in the fastest manner possible, so that you could be cloned back home in good health.","\n",{"->":"After_death"},{"#f":5}],"c-4":["\n","^P1-USH: A weapon?! Why would you need a weapon? It’s perfectly safe here in the cabin. I don’t want you to hurt yourself with something dangerous.","\n",{"->":"After_death"},{"#f":5}],"c-5":["\n","^P1-USH: Please don't go outside again!","\n","^The player looks around the room. Walks over to a broomstick and breaks it making a makeshift weapon.","\n",{"->":"deerupgrade"},{"#f":5}]}],{"#f":1}],"deerupgrade":[["^Player leaves the cabin and returns to fight the deer with their new weapon. Once defeated, the player takes the broken parts from the deer and upgrades their weapon.","\n","ev",1,"/ev",{"VAR=":"dear_defeated","re":true},["ev",{"^->":"deerupgrade.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Go deeper in the forest.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"deerupgrade.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","^Player encounters more deer enemies and defeats them. Eventually ending up at a flowing river blocking the path. Visible footsteps are seen from both ends of the river.","\n",{"->":"river_inspect"},{"#f":5}]}],{"#f":1}],"river_inspect":[["^Boot footprints are visible in the mud on the bank of the river. They lead directly into the water, then reappear coming out on the other side. The water is moving too fast for you to attempt to cross it. The water seems to be flowing from the south.","\n","ev",1,"/ev",{"VAR=":"footprints_found","re":true},"ev","str","^Head back to the cabin","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Cabin"},{"#f":5}]}],{"#f":1}],"Cabin":[["^You are at the cabin","\n","ev","str","^Go down bottom path","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Talk to P1-USH","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Go to the bottom path, to the Security Tower","/str",{"VAR?":"bottom_path_seen"},"/ev",{"*":".^.c-2","flg":5},"ev","str","^Go to the bottom path, to the Security Tower","/str",{"VAR?":"has_bird"},"/ev",{"*":".^.c-3","flg":5},"ev","str","^Go back to the river on top path","/str",{"VAR?":"river_off"},"/ev",{"*":".^.c-4","flg":21},"ev","str","^Go back top path.","/str",{"VAR?":"top_path"},"/ev",{"*":".^.c-5","flg":5},{"c-0":["\n",{"->":"Bottom_path_1"},{"#f":5}],"c-1":["\n","^P1-USH: Hey friend! Is there something you need? Some tunes? How about your favorite game?","\n",{"->":"Plush_unlock"},{"#f":5}],"c-2":["\n",{"->":"Security_Tower_death"},{"#f":5}],"c-3":["\n",{"->":"Security_Tower_alive"},{"#f":5}],"c-4":["\n",{"->":"Top_after_river"},{"#f":5}],"c-5":["\n",{"->":"Top_path_2"},{"#f":5}]}],{"#f":1}],"Plush_unlock":[["ev","str","^ You keep staring at my equipment.","/str",{"VAR?":"dear_defeated"},"/ev",{"*":".^.c-0","flg":21},"ev","str","^Are there robots that leave behind human footprints?","/str",{"VAR?":"footprints_found"},"/ev",{"*":".^.c-1","flg":21},"ev","str","^The bear robots, what are they?","/str",{"VAR?":"bear_defeated"},"/ev",{"*":".^.c-2","flg":21},["ev",{"^->":"Plush_unlock.0.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"rabbit_deafeated"},"/ev",{"*":".^.^.c-3","flg":19},{"s":["^Why are there robots in the shape of a bunny? ",{"->":"$r","var":true},null]}],["ev",{"^->":"Plush_unlock.0.22.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"spider_defeated"},"/ev",{"*":".^.^.c-4","flg":19},{"s":["^Those spider robots we saw, what were they used for?",{"->":"$r","var":true},null]}],"ev","str","^I don't need anything else.","/str","/ev",{"*":".^.c-5","flg":4},{"c-0":["\n","^P1-USH: Oh, sorry! It’s just not every day I get to see a solar panel shaped like that. Those edges look a bit sharp so please be careful! I’m glad you’re getting back into your building hobby though, it’s always a good idea to reinvigorate the mind!","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^P1-USH: None of our designs uses any human feet. Are you sure you haven’t looped back to the area before? Those woods can be pretty confusing for a human to navigate through successfully without being confused.","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["\n","^P1-USH: That’s the trash-collecting model. It uses a combination of powerful magnets with its strong arms to gather and collect trash onto its back. Wouldn’t want to be in front of a trash-collecting model while it's working.","\n",{"->":".^.^.^"},{"#f":5}],"c-3":["ev",{"^->":"Plush_unlock.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],"\n","^P1-USH: Those are the gardening models. The bunny design, while small in stature, allows the robot easy access to both small and large areas of flora that need attention. Typically, they are sent out in packs to maximize efficiency.","\n",{"->":".^.^.^"},{"#f":5}],"c-4":["ev",{"^->":"Plush_unlock.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.22.s"},[{"#n":"$r2"}],"\n","^P1-USH: They are used to make powerlines effectively. They’re kept in that area specifically and are rarely sent out anywhere else. They can climb walls extremely well, and send out powerlines from a great distance. Be careful when they’re working as you wouldn’t want one to fall on you, they’re heavy.","\n",{"->":".^.^.^"},{"#f":5}],"c-5":["\n",{"->":"Cabin"},{"#f":5}]}],{"#f":1}],"Bottom_path_1":[["ev",1,"/ev",{"VAR=":"bottom_path_seen","re":true},"ev",1,"/ev",{"VAR=":"river_off","re":true},"ev",1,"/ev",{"VAR=":"rabbit_deafeated","re":true},"^Player goes down the bottom path. Encounters the bunny enemy for the first time. Eventually reaches the river control building. They spot a control panel.","\n","ev","str","^Inspect the panel.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^A control panel that controls the flow of the river. According to the display, the water flows in a continuous cycle, eventually returning underground before being piped back here to repeat the loop. You attempt to turn off the water flow using the terminal.","\n",{"->":"Bot_1point2"},{"#f":5}]}],{"#f":1}],"Bot_1point2":[["ev","str","^... (continue)","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^The terminal denies your access, flashing the error message: “Denizen’s are not permitted to modify environmental settings.”","\n","^The player then takes the spear, jams it into the the control panel, destroying it. The sound of flowing water stops as the river is no longer an obstacle.","\n",{"->":"Bottom_path_1_2"},{"#f":5}]}],{"#f":1}],"Bottom_path_1_2":[["ev","str","^continue down the bottom path","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^head back to cabin","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"Security_Tower_death"},{"#f":5}],"c-1":["\n",{"->":"Cabin"},{"#f":5}]}],{"#f":1}],"Security_Tower_death":["ev",1,"/ev",{"VAR=":"seen_bird","re":true},"^The player walks up to a gated security tower building. A robot bird flies through, heading north. The player walks up, security alarm activates, then the player dies.","\n",{"->":"Cabin"},{"#f":1}],"Top_after_river":["ev",1,"/ev",{"VAR=":"bear_defeated","re":true},"^PLayer defeats enemies and walks back to see the river is no longer there and is passable. The player then encounters a new enemy, the bear. After the bear enemy, the players continue on but see's a metal panel sticking out with something inside of it. The player inspects the panel.","\n",{"->":"Inspect_robot"},{"#f":1}],"Inspect_robot":["ev",1,"/ev",{"VAR=":"top_path","re":true},"^A broken bear robot is hidden under a metal panel here. Parts of it are missing, mainly its claws, as if someone salvaged weapons from it, not unlike how you did from the deer. The magnets it uses in its paws to pick up and hurl scrap are still present. You retrieve the magnets and incorporate them into your weapon.","\n","^Player unlocks spear throw and retrieval.","\n",{"->":"Top_path_2"},{"#f":1}],"Top_path_2":[["ev","str","^look for the bird.","/str",{"VAR?":"seen_bird"},"/ev",{"*":".^.c-0","flg":21},"ev","str","^Walk up to the final building.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Walk up to the final building.","/str",{"VAR?":"metal_gate_open"},"/ev",{"*":".^.c-2","flg":21},"ev","str","^Go back to the cabin.","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["\n",{"->":"Bird_found"},{"#f":5}],"c-1":["\n",{"->":"Metal_gate"},{"#f":5}],"c-2":["\n",{"->":"Metal_gate_unlock"},{"#f":5}],"c-3":["\n",{"->":"Cabin"},{"#f":5}]}],{"#f":1}],"Bird_found":["ev",0,"/ev",{"VAR=":"bottom_path_seen","re":true},"ev",1,"/ev",{"VAR=":"has_bird","re":true},"^You find the bird. Destroy it and take the transmitter.","\n",{"->":"Top_path_2"},{"#f":1}],"Metal_gate":["^You walk up towards the building and see the metal gate with electricity running through it. Looks dangerous to touch. Looking down at the metal walkway, writing is crudely scratched into the metal plate. It reads:","\n","^“Power grid is south. Cabin is west, past the river. Hid robot to mark path. Need to bring map next time.”","\n","^You walk back.","\n",{"->":"Top_path_2"},{"#f":1}],"Security_Tower_alive":[["ev",1,"/ev",{"VAR=":"metal_gate_open","re":true},"ev",1,"/ev",{"VAR=":"spider_defeated","re":true},"^The player walks up with a beeping sound, a pause, and the doors/gate open. From there the player is able to easily reach the power grid where they encounter robot spiders for the first time and turns off the electrical fence power.","\n","^The player can either follow the path back to the main building, or go back to the cabin.","\n","ev","str","^cabin","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Go to the main building.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"Cabin"},{"#f":5}],"c-1":["\n",{"->":"Metal_gate_unlock"},{"#f":5}]}],{"#f":1}],"Metal_gate_unlock":["^Player walks up towards the building and sees that the metal gate is unlocked. Player heads inside and enters a boss room TBT. After the boss room, the player enters a computer room.","\n",{"->":"Computer_room"},{"#f":1}],"Computer_room":[["ev","str","^inspect computer 1","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^inspect computer 2","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^inspect computer 3","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^inspect computer 4","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^inspect computer 5","/str","/ev",{"*":".^.c-4","flg":4},"ev","str","^Go to the main computer","/str","/ev",{"*":".^.c-5","flg":20},{"c-0":["\n","^Name: Victor Green","\n","^ID Number: X5972YZ","\n","^Former Occupation: Solar Panel Technician","\n","^Hobbies: Rock Climbing, Gardening, Painting","\n","^Status:","\n","^Currently consuming nutrition model 435.2. Victor has been taking care of his garden for approximately 1 year, 3 months, and 6 days. Victor has completed approximately 10 paintings in the past month with the latest painting revolving around his roses. No intervention is needed.","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^Name:  Neriah Blake","\n","^ID Number: 7R1B8L9","\n","^Former Occupation: Urban Farmer","\n","^Hobbies: Biking, brewing kombucha, and practicing yoga.","\n","^Status:","\n","^Currently doing yoga poses with the surround audio system playing, “Seaside Ambients”. Neriah’s kitchen area currently has 6 bottles filled with kombucha waiting to be fermented. Nerriah’s request for more ingredients is in progress as G3-DEN models prepare the items. Nerriah’s Indoor bike status indicates they have 9,234 miles ridden in total. No intervention is needed.","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["\n","^Name: Leah Stone","\n","^ID Number: 4V9E1R6","\n","^Former Occupation: Educator","\n","^Hobbies: Photography, writing, and bird watching.","\n","^Status:","\n","^Currently redecorating living space. Requests for physical copies of digital imagery are currently in progress. Requests for 10x10 picture frames in progress, currently awaiting delivery. P4-USH data indicates no further social intervention is needed since new P4 game was created.  No intervention is needed.","\n",{"->":".^.^.^"},{"#f":5}],"c-3":["\n","^Name: Ava Chen","\n","^ID Number: 9L1T7H6","\n","^Former Occupation: Renewable Energy Researcher","\n","^Hobbies: Knitting, reading, and playing video games.","\n","^Status:","\n","^Currently using P4-USH model to play, “Bird Gatherer”. Requests for multiple reading materials in progress. Recent request for C2-OW models to appear more often around the living environment has been approved, pending activation from Ava. Request for a new P4 design in progress. No intervention is needed.","\n",{"->":".^.^.^"},{"#f":5}],"c-4":["\n","^Name: A—----","\n","^ID Number: 1F5J7T9","\n","^Former Occupation: Engineer","\n","^Hobbies: N/A","\n","^Status:","\n","^MissingDataException, manual intervention required.","\n",{"->":".^.^.^"},{"#f":5}],"c-5":["\n","^It doesn’t take long to unlock the computer. Taking a quick glance at the context of the computer, you quickly realize that this is the master computer. This computer contains programs that are actively controlling different types of robot models. As you are browsing through the programs, you notice several notifications appear calling for requests. The computer, or program, seems to be self-automated as you see several different programs pop up to help analyze and complete the request. Looking further into everything, you realize that you can shut it down easily and end all of it. You begin the process to do so.","\n",{"->":"com2"},{"#f":5}]}],{"#f":1}],"com2":[["ev","str","^A pop up appears","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^In a word document that envelops a quarter of the screen appears. It reads, “If you are reading this, please wait. I was one of the engineers working on the Paradise project before the system took over and put everyone in habitat domes. At first, I intended to rectify our mistake and shut it down. I managed to bypass the barriers the computer placed to stop me, much like you did, but when I got here I had second thoughts. Even though it’s out of our control, the Paradise project is working! People are safe and happy, even if they can’t leave. And who am I to decide to take that away from them? Instead, I’ve decided it would be best to go back and wipe my memories, so I can have the peace of ignorance and hopefully have that same happiness. I found the file for the cloning tubes and the panel that hides the memory restoration module. I’m pinning it here so you can use it to do the same if you like.”","\n",{"->":"ending_dec"},{"#f":5}]}],{"#f":1}],"ending_dec":[["ev","str","^Shut down the system","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^reboot memories","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^Screen fades to black as the sounds of machines begin to shut off","\n","end",{"#f":5}],"c-1":["\n","^Screen Slowly Fades to black.","\n","^P1-USH: Hello? Friend? Your readings indicate you should be awake by now.","\n","end",{"#f":5}]}],{"#f":1}],"global decl":["ev",0,{"VAR=":"Intro_leave"},0,{"VAR=":"interact"},0,{"VAR=":"body"},0,{"VAR=":"death"},0,{"VAR=":"dear_defeated"},0,{"VAR=":"footprints_found"},0,{"VAR=":"bear_defeated"},0,{"VAR=":"river_off"},0,{"VAR=":"bottom_path_seen"},0,{"VAR=":"rabbit_deafeated"},0,{"VAR=":"seen_bird"},0,{"VAR=":"top_path"},0,{"VAR=":"has_bird"},0,{"VAR=":"metal_gate_open"},0,{"VAR=":"spider_defeated"},"/ev","end",null],"#f":1}],"listDefs":{}};