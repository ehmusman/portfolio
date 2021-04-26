import React, { useState } from 'react'
import Project from './Project'

const Projects = () => {
    const data = [
        { id: 1, name: "Shop IT Ecomerace", description: "This is an Ecomerace Application created by using Reactjs, Mongodb, Nodejs and Expressjs", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619435050/portfolio/shopit_tdztnm.png", appLink: "https://shopit-v1.herokuapp.com/", github: "https://github.com/ehmusman/shopit" },
        { id: 2, name: "Multi Step Form", description: "This is a multistep form app created by using reactjs with formik and yup", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619435188/portfolio/multistepform_cbylh1.png", appLink: "http://multistep-form-ehmusman.surge.sh/", github: "https://github.com/ehmusman/multistep-form" },
        { id: 3, name: "Diaries App", description: "This is diaries app created by using react js with Miragejs for mocking server ", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619435388/portfolio/diaries_app_ver8c5.png", appLink: "http://diaries-app-ehmusman.surge.sh/", github: "https://github.com/ehmusman/diaries-app" },
        { id: 4, name: "Shopping Basket", description: "Created by using React js and react router", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619435556/portfolio/shopping_basket_w0opaf.png", appLink: "http://shopping-basket-ehmusman.surge.sh/", github: "https://github.com/ehmusman/shopping-basket" },
        { id: 5, name: "SpaceX API", description: "This app is created by using Reactjs with GraphQL and Apollo with React router", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619435744/portfolio/spacex_jrniyw.png", appLink: "https://spacex-ehmusman.herokuapp.com/", github: "https://github.com/ehmusman/spacex-graphql" },
        { id: 6, name: "Timer App", description: "This app is created by using react and typescript", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619435879/portfolio/timer_app_huj4ro.png", appLink: "http://react-timer-tdd-ehmusman.surge.sh/", github: "https://github.com/ehmusman/timer-app" },
        { id: 7, name: "Expense Tracker App", description: "This App is created by using React with typescript", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619436066/portfolio/expense_tracker_app_kphpxr.png", appLink: "https://expense-tracker-pwa-ehmusman.web.app/", github: "https://github.com/ehmusman/expense-tracker-react-ts" },
        { id: 8, name: "Quiz App", description: "This App is created by using React with typescript", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619436190/portfolio/quiz_app_gvqgst.png", appLink: "https://quiz-app-react-ts-ehmusman.web.app/", github: "https://github.com/ehmusman/quiz-app-react-ts" },
        { id: 9, name: "NPM Package Finder", description: "This App is created by using React with typescript", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619436368/portfolio/packagefinder_vseyyt.png", appLink: "http://npm-package-finder-reactts-ehmusman.surge.sh/", github: "https://github.com/ehmusman/npm-package-finder" },
        { id: 10, name: "Contact Manager", description: "This is a contact manager app created by using reactjs with redux", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619436526/portfolio/contact_manager_kxouhp.png", appLink: "http://contact-manager-ehmusman.surge.sh/", github: "https://github.com/ehmusman/contact-manager-redux" },
        { id: 11, name: "Shoe Store", description: "This is a Shoe Store ap created by using Reactjs with redux", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619436677/portfolio/shoe_store_fsvdk5.png", appLink: "http://shoe-store-ehmusman.surge.sh/", github: "https://github.com/ehmusman/shoe-store" },
        { id: 12, name: "Red Queen Race", description: "This app is created by using reactjs with web animation API", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619436823/portfolio/red_queen_race_co0gvk.png", appLink: "http://red-queen-race-ehmusman.surge.sh/", github: "https://github.com/ehmusman/red-queen-race" },
        { id: 13, name: "Covid-19 Tracker", description: "This is COVID-19 Tracker App Created by using reactjs", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619436983/portfolio/covid_tsh5pm.png", appLink: "http://covid-19-tracker-ehmusman.surge.sh/", github: "https://github.com/ehmusman/covid-19-tracker" },
        { id: 14, name: "GitHub Finder", description: "This is a Github clone created by using react js with Context API", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619437149/portfolio/gitFinder_soien8.png", appLink: "http://githubclone-use-context-ehmusman.surge.sh/", github: "https://github.com/ehmusman/githubclone-use-context" },
        { id: 15, name: "React Hooks Todo List", description: "This is a Todo List Created by using React hooks", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619437307/portfolio/todo_list_gmji6h.png", appLink: "http://react-hooks-todolist-ehmusman.surge.sh/", github: "https://github.com/ehmusman/react-hooks-todolist" },
        { id: 16, name: "Blogen Admin UI", description: "This is Blogen Admin UI created by using Bootstrap", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619437505/portfolio/blogen_wqlkjf.png", appLink: "http://blogen-admin-ui-ehmusman.surge.sh/", github: "https://github.com/ehmusman/blogen-admin-ui" },
        { id: 160, name: "Glozzom Multi Page App", description: "This is Glozzom Multi Page App created by using Bootstrap", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619437649/portfolio/glozzom_us1heu.png", appLink: "http://glozzom-multi-page-app-ehmusman.surge.sh/", github: "https://github.com/ehmusman/Glozzom-multi-page-app" },
        { id: 17, name: "Mizux SPA", description: "This is Mizuxe Single Page Application created by using Bootstrap", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619437776/portfolio/mizuxe_lbdbe9.png", appLink: "http://mizuxe-spa-ehmusman.surge.sh/", github: "https://github.com/ehmusman/mizuxe-spa" },
        { id: 18, name: "Loop Lab", description: "This is LoopLab Application created by using Bootstrap", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619437905/portfolio/looplab_zwhquw.png", appLink: "http://looplab-ehmusman.surge.sh/", github: "https://github.com/ehmusman/loopLAB" },
        { id: 19, name: "Hotel Website", description: "This is a hotel website created by using html and css", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619438032/portfolio/hotel_web_hantgs.png", appLink: "http://responsivehotelwebsite-ehmusman.surge.sh/", github: "https://github.com/ehmusman/responsiveHotelWebsite" },
        { id: 20, name: "Edge Ledger Website", description: "This is a Edge Ledger Website created by using html and css", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619438190/portfolio/edge_ledger_l9nlt9.png", appLink: "http://edgeledgerwebsitespa-ehmusman.surge.sh/", github: "https://github.com/ehmusman/edgeLedgerWebsiteSPA" },
        { id: 21, name: "Calories Tracker", description: "This is a calories tracker app created by using html and css and javascript", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619438333/portfolio/calories_ekqfzn.png", appLink: "http://tracalories-ehmusman.surge.sh/#", github: "https://github.com/ehmusman/tracalories" },
        { id: 22, name: "Form Validation", description: "This is a simple form validation app created by using html and css and javascript", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619441067/portfolio/form_validaton_t2bqfh.png", appLink: "http://formvalidation-ehmusman.surge.sh/", github: "https://github.com/ehmusman/formValidation" },
        { id: 23, name: "Number Guesser Game", description: "This is a Number Guesser Game created by using html and css and javascript", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619441190/portfolio/number_guesser_aojmmn.png", appLink: "http://numberguessergame-ehmusman.surge.sh/", github: "https://github.com/ehmusman/numberGuesserGame" },
        { id: 24, name: "Book List Project", description: "This is a Book List Project created by using html and css and javascript", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619441305/portfolio/book_list_salkms.png", appLink: "hhttp://booklistproject-ehmusman.surge.sh/", github: "https://github.com/ehmusman/bookListProject" },
        { id: 25, name: "Todo List", description: "This is a todo list created by using html and css and javascript", img: "https://res.cloudinary.com/ehmusman/image/upload/v1619441542/portfolio/todolist_zniurb.png", appLink: "http://todolist-ehmusman.surge.sh/", github: "https://github.com/ehmusman/toDoList" }
    ]
    const [projects] = useState(data)
    return (
        <div className="container">
            {projects.map(project => (
                <Project
                    key={project.id}
                    name={project.name}
                    image={project.img}
                    description={project.description}
                    github={project.github}
                    app={project.appLink}
                />
            ))}
        </div>
    )
}

export default Projects
