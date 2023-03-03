"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  evt.preventDefault();
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  evt.preventDefault();
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** This function fires on clicking of navbar submit link. It will show
 * the submit form so that a user can submit a new story.
 */

function navShowSubmitForm(evt) {
  console.log("Submit Form shown on page");
  evt.preventDefault();
  const $submitFormSection = $(".submit-form-container");

  $submitFormSection.show();
}

const $navSubmit = $("#nav-submit");
$navSubmit.on("click", navShowSubmitForm);



/** hides all stories and displays user favorites */
function navShowFavorites(evt) {
  evt.preventDefault();

  if (!($favoritesList.hasClass('favesAdded'))) addUserFavorites();

  const $accountFormsContainer = $('.account-forms-container');
  $accountFormsContainer.hide(); //fix this? auto-hides on refresh;
  $allStoriesList.hide();
  $favoritesContainer.show();
}

const $navFavorites = $('#nav-favorite');
$navFavorites.on('click', navShowFavorites);
