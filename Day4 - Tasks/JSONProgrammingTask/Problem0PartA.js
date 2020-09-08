var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   };

// 1. Add height and weight to Fluffy
   cat.height = 5;
   cat.weight = 10;

// 2. Fluffy name is spelled wrongly. Update it to Fluffyy
   cat.name = "Fluffyy";

// 3. List all the activities of Fluffyy’s catFriends.
   let arr = cat.catFriends;
   for(let i=0;i<arr.length;i++) {
       console.log(arr[i].name + ": ");
       for(let j=0;j<arr[i].activities.length;j++) {
           console.log(arr[i].activities[j]);
       }
   }

// 4. Print the catFriends names.
   for(let i=0;i<arr.length;i++) {
       console.log(arr[i].name);
   }

// 5. Print the total weight of catFriends
    let totalWeight = 0;
   for(let i=0;i<arr.length;i++) {
        totalWeight += arr[i].weight;
   }
   console.log(totalWeight);

// 6. Print the total activities of all cats (op:6)
   let totalActivities = 0;
   function count(cat) {
      for(let key in cat) {
           if(key === "activities")
                totalActivities += cat[key].length;
            else if(key === "catFriends") {
                for(let k=0;k<cat[key].length;k++) {
                    count(cat[key][k]);
                }
            }
        }
    }
    count(cat);
   console.log(totalActivities);

// 7. Add 2 more activities to bar & foo cats
    cat.catFriends[0].activities.push("climb aeroplane");
    cat.catFriends[0].activities.push("climb helipad");

    cat.catFriends[1].activities.push("watch TV");
    cat.catFriends[1].activities.push("soap bath");

// 8. Update the fur color of bar
    cat.catFriends[0].furcolor = "black";
