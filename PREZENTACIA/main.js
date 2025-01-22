
        
       const websiteData = {
        "languages": {
          "ka": {
            "authorization": "ავტორიზაცია",
            "register": "რეგისტრაცია",
            "news": "სიახლეები",
            "season": "სეზონი",
            "multimedia": "მულტიმედია",
            "videoGallery": "ვიდეოგალერია",
            "photoGallery": "ფოტოგალერია",
            "club": "კლუბი",
            "squad": "შემადგენლობა",
            "history": "ისტორია",
            "titles": "ტიტულები",
            "coaches": "მთავარი მწვრთნელები",
            "presidents": "პრეზიდენტები",
            "stadium": "სტადიონი",
            "site": "საიტი",
            "about": "ჩვენ შესახებ",
            "contact": "კონტაქტი",
            "rules": "წესები",
            "ads": "რეკლამა",
            "search": "ძიება",
            "nextmatch": "მომდევნო მატჩი",
            "league": "ბუნდესლიგა",
            "prevmatch": "წინა მატჩი",
            "competition_trophy": "ჩემპიონთა ლიგა",
            "news_section": "სიახლეები",
            "view_more_articles": "მეტი სტატიის ნახვა",
            "ranking_goals": "ბომბარდირები",
            "ranking_assists": "ასისტენტები",
            "ranking_cards": "ბარათები",
            "injuries": "დანაკლისები",
            "injured_players": "მანუელ ნოიერი • სერჟ გნაბრი • კინგსლი კომანი • იოსიპ სტანიშიჩი • ჰიროკი იტო • ჟოაო პალინია • საშა ბოე",
            "yellow_red_card": "ყვითელი/წითელი ბარათი",
            "upamecano": "უპამეკანო",
            "team_info": "კლუბები"
          },
          "en": {
            "authorization": "Login",
            "register": "Register",
            "news": "News",
            "season": "Season",
            "multimedia": "Multimedia",
            "videoGallery": "Video Gallery",
            "photoGallery": "Photo Gallery",
            "club": "Club",
            "squad": "Squad",
            "history": "History",
            "titles": "Titles",
            "coaches": "Head Coaches",
            "presidents": "Presidents",
            "stadium": "Stadium",
            "site": "Site",
            "about": "About Us",
            "contact": "Contact",
            "rules": "Rules",
            "ads": "Advertising",
            "search": "Search",
            "nextmatch": "Next Match",
            "league": "Bundesliga",
            "prevmatch": "Previous Match",
            "competition_trophy": "Champions League",
            "news_section": "News",
            "view_more_articles": "View More Articles",
            "ranking_goals": "Top Scorers",
            "ranking_assists": "Top Assists",
            "ranking_cards": "Cards",
            "injuries": "Injuries",
            "injured_players": "Manuel Neuer • Serge Gnabry • Kingsley Coman • Josip Stanisic • Hiroki Ito • Joao Palinha • Sasa Boey",
            "yellow_red_card": "Yellow/Red Cards",
            "upamecano": "Upamecano",
            "team_info": "Teams"
          }
        },
        "slides": [
          {
            "slide": 1,
            "image": "foto2.jpg",
            "text": {
              "ka": "ფეხბურთში რასიზმი დაბრუნდა",
              "en": "Racism Returns to Football"
            }
          },
          {
            "slide": 2,
            "image": "futbalski.jpeg",
            "text": {
              "ka": "ბაიერნის მწრთნელი აცხადებს რომ გუგას \"gyat\" ძალიან მაგარია",
              "en": "Bayern's coach claims Guga's \"gyat\" is amazing"
            }
          },
          {
            "id": 3,
            "image": "foto3.jpg",
            "text": {
              "ka": "შეიხები კალაძეს სახელობის სტადიონის აშენებას აპირებენ",
              "en": "Sheikhs plan to build Kaladze Stadium"
            }
          }
        ],
        "matches": {
          "next": {
            "date": "11/01/2025",
            "time": "21:30",
            "venue": "ბორუსია - პარკი",
            "competition": "ბუნდესლიგა"
          },
          "previous": {
            "score": "0 - 6",
            "competition": "ჩემპიონთა ლიგა"
          }
        },
        "news": [
          {
            "id": 1,
            "title": {
              "ka": "მადრიდის \"რეალი\" დეივისის ტრანსფერისთვის ბრძოლას აგრძელებს",
              "en": "Real Madrid continues fight for Davies transfer"
            },
            "text": {
              "ka": "მადრიდის \"რეალი\" მუდმივად ეკონტაქტება ალფონსო დეივისის აგენტს...",
              "en": "Real Madrid maintains constant contact with Alfonso Davies's agent..."
            },
            "image": "znaki.jpeg",
            "author": "vaja_azetili",
            "time": "16:40"
          }
        ],
        "stats": {
          "scorers": [
            {
              "rank": 1,
              "name": "დიმოჩკა ზოდელავა",
              "goals": 20,
              "image": "harry-kane.png",
              "competitions": {
                "champions_league": 1,
                "bundesliga": 14,
                "cup": 5
              }
            }
          ],
          "assists": [
            {
              "rank": 1,
              "name": "პარი კეინი",
              "assists": 10,
              "image": "joshua_kimmich.png",
              "competitions": {
                "champions_league": 2,
                "bundesliga": 5,
                "cup": 3
              }
            }
          ]
        },
        "standings": [
          {
            "position": 1,
            "team": "ბაიერნი",
            "matches": 15,
            "points": 36,
            "logo": "logo.png"
          }
        ]
      }

        
        function handleLanguageChange() {
            const languageSelector = document.getElementById('languageSelector');
            const currentLang = languageSelector.value;
            const langData = websiteData.languages[currentLang];

            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                const value = getNestedValue(langData, key);
                if (value) element.textContent = value;
            });
        }

        function getNestedValue(obj, path) {
            return path.split('.').reduce((current, key) => 
                current && current[key] !== undefined ? current[key] : undefined, obj);
        }

      


        // სლაიდები
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        function showSlide(n) {
            slides.forEach(slide => slide.style.display = 'none');
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].style.display = 'block';
            updateNavCircles();
        }

        function updateNavCircles() {
            document.querySelectorAll('.circle').forEach((circle, index) => {
                circle.classList.toggle('active', index === currentSlide);
            });
        }

        // სტატები
        function handleStatsTabChange(tabName) {
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.querySelectorAll('.tab-button').forEach(button => {
                button.classList.remove('active');
            });
            
            document.getElementById(tabName).classList.add('active');
            document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        }

        
            
            // Set up event listeners
            document.getElementById('languageSelector').addEventListener('change', handleLanguageChange);
            
            document.querySelector('.prev')?.addEventListener('click', () => showSlide(currentSlide - 1));
            document.querySelector('.next')?.addEventListener('click', () => showSlide(currentSlide + 1));
            
            document.querySelectorAll('.tab-button').forEach(button => {
                button.addEventListener('click', () => {
                    handleStatsTabChange(button.getAttribute('data-tab'));
                });
            });

            // 5
            setInterval(() => showSlide(currentSlide + 1), 5000);
