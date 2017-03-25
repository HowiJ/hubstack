# TODOs

## Front End
* Home ( / )
  * Weather
    * ***Add another Location** takes you to the add another location of settings page*

* Day View ( /calendar/day )
  * Month View (Back Button)
  * Create an actual Day View that looks nicer than current (meaning almost anything)
  * Create Task Menu

* Month View ( /calendar )
  * Today button
  * Skip-to-Month/Year feature
  * Create Task Menu

* Settings
  * CRUD Locations

* Notes || Todo 
  * Some sort of Notes application similar to Apple's Notes or a quick TODO List

## Back End (Node+Express OR Firebase)
* Passport
  * For Google Auth 

* Database (mongoDB)
  * Users (Create, Read, Update)
    * first_name: String
    * last_name: String
    * g_id: <whatever ID Google Auth gives>
    * tasks: [Tasks]
    * cities: [String] *Store from the city that the weather API provides*

  * Tasks (Create, Read, Update, Destroy)
    * title: String
    * notes: String
    * location: String
    * repeat: { M, T, W, Th, F, Weekly, Monthly, Yearly }
    * date_from: String *Need this to be formatted date/time for use with moment*
    * date_to: String *Need this to be formatted date/time for use with moment*
