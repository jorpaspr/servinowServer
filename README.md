Servinow standar installation
=============================

1) Clone the project:

Clone the project.

2) Configure it:
In app/config there are a parametersORIGINAL.yml *COPY* it and rename it to parameters.yml
Configure it with your database info.

3) Install all vendor dependencies of symfony2:
-------------------------------------------

Install first all vendor dependencies. So YOU HAVE TO download composer:

    curl -s https://getcomposer.org/installer | php
    
OR with "my way" (is the same as before but without the problem I had in Linux with curl):

    php composerInstaller.php

Then just install all vendor dependencies for symfony2:

    php composer.phar install

4) Checking your System Configuration:
-------------------------------------

To check if everything is OK symfony can check it for you. Execute its dependency checker:

    php app/check.php

Access the `config.php` script from a browser:

    http://localhost/path/to/symfony/app/web/config.php

If you get any warnings or recommendations, fix them before moving on.
