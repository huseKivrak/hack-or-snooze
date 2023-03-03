## user.js

### Subpart 3A: Data/API Changes
When the user is loaded from the server (find the function for that!),
- `loginViaStoredCredentials`
the response from the server includes an array of which stories the user has already added to their favorites.

- .addFavorite and .removeFavorite methods;
    - accept *Story* instances
    - update favorite values in API
    - must be able to show and unfavorite/favorite stories no longer shown on main page
	    - array values should be from API, not localStorage or JS *user* object
	    -

### test methods:
let story = storyList.stories[0];   // grab first story on list
currentUser.addFavorite(story);

- You may want to add a **static method to the Story class** to get an **arbitrary story by ID**.
    - `storyList.getStoryID()`?


add favorite (POST): https://hack-or-snooze-v3.herokuapp.com/users/username/favorites/storyId

delete favorite (DELETE): https://hack-or-snooze-v3.herokuapp.com/users/username/favorites/storyId




## HTML
- make favorite section in HTML
    - hidden
- add "fave" buttons next to each story

### navFav
- shows favorites section,
- hides story list

### fave buttons
- clickable, add listeners that call respective funcs;
- bootstrap: button appearance before and after click
    - don't refresh page
    - should be able to show stories no longer on front page (API request);
- **event delegation**: add functionality to fave buttons that don't exist yet
- on DOM: after <li>, before <a>;


.on('click', '.fave', "whole page, () =>{
    if (already favorite){
        .removeFavorite()
    } else{
        .addFavorite()
    }
})

