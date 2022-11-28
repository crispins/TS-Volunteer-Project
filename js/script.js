

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1303},"pages":[{"id":"page-home","displayName":"home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-web-to-lead-form","displayName":"web-to-lead form","link":{"linkType":"LinkTypePage","href":"#!page-web-to-lead-form"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-thank-you-for-web-to-lead","displayName":"thank you for web to lead","link":{"linkType":"LinkTypePage","href":"#!page-thank-you-for-web-to-lead"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-thank-you-for-web-to-case","displayName":"thank you for web to case","link":{"linkType":"LinkTypePage","href":"#!page-thank-you-for-web-to-case"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-achievement-web-to-case-form","displayName":"achievement-web-to-case-form","link":{"linkType":"LinkTypePage","href":"#!page-achievement-web-to-case-form"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-volunteer-project-web-to-case-form","displayName":"volunteer-project-web-to-case-form","link":{"linkType":"LinkTypePage","href":"#!page-volunteer-project-web-to-case-form"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-study-group-web-to-case-form","displayName":"study-group-web-to-case-form","link":{"linkType":"LinkTypePage","href":"#!page-study-group-web-to-case-form"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-email-to-case","displayName":"Email to Case","link":{"linkType":"LinkTypePage","href":"#!page-email-to-case"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-embedded-volunteer-flow","displayName":"Embedded Volunteer Flow","link":{"linkType":"LinkTypePage","href":"#!page-embedded-volunteer-flow"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true}]}

                var initESW = function(gslbBaseURL) {

                                embedded_svc.settings.displayHelpButton = true; //Or false

                                embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

 

                                //embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)

                                //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

 

                                //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)

                                //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

 

                                // Settings for Flows

 

                                embedded_svc.settings.enabledFeatures = ['Flows'];

                                embedded_svc.settings.entryFeature = 'Flows';

 

                                embedded_svc.init(

                                                'https://d3g0000019yn4eae--sfcdp1113.sandbox.my.salesforce.com',

                                                'https://d3g0000019yn4eae--sfcdp1113.sandbox.my.salesforce-sites.com/members',

                                                gslbBaseURL,

                                                '00DR00000027SvE',

                                                'Screen_Flow_for_VP_Member_Creation',

                                                {

                                                               

                                                }

                                );

                };

 

                if (!window.embedded_svc) {

                                var s = document.createElement('script');

                                s.setAttribute('src', 'https://d3g0000019yn4eae--sfcdp1113.sandbox.my.salesforce.com/embeddedservice/5.0/esw.min.js');

                                s.onload = function() {

                                                initESW(null);

                                };

                                document.body.appendChild(s);

                } else {

                                initESW('https://service.force.com');

                }
