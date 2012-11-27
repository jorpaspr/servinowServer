Servinow standar installation
=============================

1) Clone the project:
---------------------
Clone the project to, for example, *~/git/servinowServer-jorge/*. I recommend **NOT** to use git plugin of netbeans and use instead [SmartGit](http://google.es). Clone your github fork using SSH. Don't add it to Netbeans as a new project yet.

I suggest you to use java7 for SmartGit (it instantly detects changes).

2) Install server
-----------------
I recommend use [Xampp Server](http://www.apachefriends.org/es/xampp.html) instead of a LAMP in linux. Just follow [installation instrucctions](http://www.apachefriends.org/en/xampp-linux.html#377).

3) Link your local copy
-----------------------

You can use a FTP account and when you want to test your project you can upload. This is a shit because netbeans is again a shit or you can forgot sync your data. I recommend you directly use directly the working tree as a htdocs. So you can use this:

     $ sudo ln -s /home/$USER/git/servinowServer-jorge/ /opt/lampp/htdocs/servinowServer-jorge/

We have to add some file permissions to *app/cache* and *app/log*. Return to */home/$USER/git/servinowServer-jorge/* go to *app* directory and right click on cache dir and then select *Properties*. Select *Permission* tab and in *Other* section select:
     directory acces: Delete and remove files
wait 1 second.
     file access: read and write
wait 1 second.
Press the button "Apply permission to contained files" (or whatever). Then 1 second and close.

3) Configure your local copy of symfony:
----------------------------------------

In the working tree *app/config* there are a *parametersORIGINAL.yml*. **Copy** this file and rename it to *parameters.yml*. DON'T use Netbeans to copy the file because it ignores .gitignore file from git.

Configure it with your database info. If you have used xampp you can maintain the data because use the default credentials (user = root and no password).

4) Install all vendor dependencies of symfony2:
-----------------------------------------------

We need access to php executable so we have to add it to our $PATH:
    $ PATH=$PATH:/opt/lampp/bin/

Install first all vendor dependencies. So YOU HAVE TO download composer:

    curl -s https://getcomposer.org/installer | php
    
OR with "my way" (is the same as before but without the problem I had in Linux with curl):

    php composerInstaller.php

Then just install all vendor dependencies for symfony2:

    php composer.phar install

5) Checking your System Configuration:
-------------------------------------

To check if everything is OK symfony can check it for you. Execute its dependency checker:

    php app/check.php

Access the `config.php` script from a browser:

    http://localhost/path/to/symfony/app/web/config.php

If you get any warnings or recommendations, fix them before moving on. The recommendations are only recommendation. In last version of xampp I have two recommendation don't fixed and it is ok.

6) Add project to Netbeans
--------------------------
Download last version of netbeans for PHP (~50MB) and install it:
    $ sh netbeans*.sh

During the instalation I suggest you to use java6 or greater but *java7 is recommended*.

Add the project from source and use PHP 5.4 with that running configuration:
    Run as: Local Web Site (running on local web server) - (default option?)
    Project URL: http//localhost/servinowServer-jorge/ - (default option?)
    Index File: web/app_dev.php - (browse it)

The final url should be someting like this:
    http://localhost/servinowServer-jorge/web/app_dev.php/

You know where to ask any question. Thanks you.