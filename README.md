# Mission Deep Coding Challenge: Sunday Race Day
(Yes, I'm challenged by spelling)
A repo to fork for our latest coding challenge, Sunday Race Day 

This readme contains the goals and criteria for the challenge. It will define a web app that will allow a user to create a race or race series for Forza Horizon 5, it's criteria and track scoring.

## Goals
### Race Coordinator features
- The web app should allow a user to select a day and create race events within that day.
- A Race should allow for the definition of the following:
  - Vehicle restrictions of class and type.
  - Possible track (not sure how hard or easy)
  - Race type (dirt/street/drag/etc..)
  - Restrictions should also include a free form section for the specification of rules of say how you can upgrade. So, free text.
  - A list of drivers. This should be modifyable at race time.
- Races should be able to be linked in a series of races with scoring across the series. 
- Coordinator should be able to record results and have the leader board for the race/series update in the driver view

### Driver features
- Drivers should have a view of the configured races (possible calendar / datetime view) and the results of past and current races.
- Drivers should register to make it easier to assign to races and track long term progress.
- Drivers should be able to "apply" for a race and be added to a leader board.
### Bonus features
- Have a concept of users so anyone can manage their own races and share them to people. 
- Driver stats
- Race stats (cars used etc)
- Leader boards
- Stats for groups and global stats for the whole site
- Randomizing race criteria generator
- Mobile user consideration. (This can be handy for users without second monitors)

## Development platform requirements
- Should be a web hosted application so that users and drivers can access the information (Plus we're web guys) WebAssembly counts as web based. 
- Use what ever stack you prefer. In the past these challenges have allowed us to show off our preferred stacks, learn new techniques, and flex.
- When completed all sites should daisy chain links to each other to share the love. 

## Resources

### Scoring point system

- 1st - 12 points
- 2nd - 10 points
- 3rd - 8 points
- 4th - 7 points
- 5th - 6 points
- 6th - 5 points
- 7th - 4 points
- 8th - 3 points
- 9th - 2 points
- 10th - 1 point

### Car data
Baumbie found a site that has all of the cars in FH5. You can export this in an excel sheet at this page.

https://www.kudosprime.com/fh5/listmaker.php
