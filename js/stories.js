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
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>`);
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

async function getSubmitFormData(evt) {
  evt.preventDefault();
  // "author-name"
  // "title-name"
  // "url-name"
  const $author = $("#author-name").val();
  const $title = $("#title-name").val();
  const $url = $("#url-name").val();

  const newStorySubmission = {
    author: $author,
    title: $title,
    url: $url,
  };

  // console.log("newStorySub: ", newStorySubmission);
  const addedStory = await storyList.addStory(currentUser, newStorySubmission);
  console.log('addedStory', addedStory);


  const storyHtml = `<li id=${addedStory.storyId}>
  <a href="${addedStory.url}" target="a_blank" class="story-link">${addedStory.title}</a>
 <small class="story-hostname">(hostname.com)</small>
 <small class="story-author">${addedStory.author}</small>
 <small class="story-user">${currentUser}</small>
 </li>`;

 console.log('storyHtml: ', storyHtml);
//  const $allStoriesList = $('#all-stories-list');

 $allStoriesList.prepend(storyHtml);
}

const $newStoryForm = $("#add-story-form");
$newStoryForm.on("submit", getSubmitFormData);
