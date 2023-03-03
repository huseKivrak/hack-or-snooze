"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
      <span class="star">
      <i class="bi bi-star">
      </i>
      </span>
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

/** This function fires on click of our submit form.
 * It will take in the users submit form data, and prepend
 * that data to the list of stories.
 */

async function getSubmitFormData(evt) {
  console.log("Submit Form Data Received");
  evt.preventDefault();

  const authorInput = $("#author-name").val();
  const titleInput = $("#title-name").val();
  const urlInput = $("#url-name").val(); //

  const newStorySubmission = {
    author: authorInput,
    title: titleInput,
    url: urlInput,
  };

  const addedStory = await storyList.addStory(currentUser, newStorySubmission);

  const markedUpStory = generateStoryMarkup(addedStory);

  $allStoriesList.prepend(markedUpStory);
  console.log("Story prepended to Stories List");
}

const $newStoryForm = $("#add-story-form");
$newStoryForm.on("submit", getSubmitFormData);

/** Gets user favorites and populate favorites section */
function addUserFavorites() {
  console.log("getUserFavorites");

  const userFavorites = currentUser.favorites;


    for (const favorite of userFavorites) {
      const markedUpFavorite = generateStoryMarkup(favorite);
      $favoritesList.append(markedUpFavorite);
    }

    $favoritesList.addClass('favesAdded');
}
