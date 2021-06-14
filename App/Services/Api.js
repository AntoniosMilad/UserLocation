// a library to wrap and simplify api calls
import apisauce from 'apisauce';
import FormData from 'form-data';
import {stringify} from 'query-string';

// our "constructor"
  const create = (baseURL = 'http://dev.example.com/api/') => {

  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    // 10 second timeout...
    timeout: 10000,
  });

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const setAuthToken = (userAuth) =>
    api.setHeader('Authorization', 'Bearer ' + userAuth);

  const removeAuthToken = () => api.deleteHeader('Authorization');

  //Auth
  const signIn = (email, password) =>
    api.post('users/login', {email, password});

  const registerMobile = (email) => api.post('mob/users/mailver/', {email});

  const verifyMobile = (email, otp) =>
    api.post('mob/users/verifyotp/', {email, otp});

  const registerUser = (
    fullName,
    phoneNumber,
    email,
    countryCode,
    pass,
    c_pass,
  ) =>
    api.post('mob/users/register', {
      fullName,
      phoneNumber,
      email,
      countryCode,
      pass,
      c_pass,
    });

//create new category
  const addCategory = (categoryName, categoryDescription) =>
    api.post('addNewCategory', {categoryName, categoryDescription});

//create new movie
  const addMovie = (movieName, movieRate,movieDescription) =>
    api.post('addNewMovie', {movieName, movieRate,movieDescription});

 //get category list to show
  const getCategoryList = (id) => {
    return api.get(`category/list/${id}`);
  };

   //delete movie from movies list
  const deleteMovie = (id) => {
    return api.get(`list/delete/${id}`);
  };

  // -------
  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    //Auth
    setAuthToken,
    removeAuthToken,
    signIn,
    registerMobile,
    verifyMobile,
    registerUser,

    //movies
    addCategory,
    addMovie,
    getCategoryList,
    deleteMovie,
  };
};

// let's return back our create method as the default.
export default {
  create,
};
