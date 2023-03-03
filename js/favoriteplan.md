
## HTML
- make favorite section in HTML
    - hidden
- add "fave" buttons next to each story

    - should be able to show stories no longer on front page (API request);

## user.js
- .addFavorite and .removeFavorite methods;
    - accept *Story* instances
    - update favorite values in API
    - must be able to show and unfavorite/favorite stories no longer shown on main page


## fave buttons
- clickable, add listeners that call respective funcs;
- css that changes their appearance on click
    - don't refresh page

## test methods:
`let story = storyList.stories[0];   // grab first story on list`
`currentUser.addFavorite(story);`

- You may want to add a **static method to the Story class** to get an **arbitrary story by ID**.
    - `storyList.getStoryID()`?
