import React from 'react';
import '../styles/About.css';
import picture from "../assets/me.webp";
import react from '../assets/logo-react.png';
import html from '../assets/logo-html.png';


function About() {
    return (
        <div className='about__container'>
            <img src={picture} alt="me" className='about__pic' />
            <p className="about__title">Antoine Jonville, 33ans, Cannes(06, Alpes-Maritimes)</p>
            <p className="about_desc">J'ai commencé le développement web en autodidacte, étant passionné par le monde de l'informatique,
            j'ai effectué une formation de 6 mois avec OpenClassrooms sur le parcours Développeur Web. Je suis quelqu'un de curieux et passionné,
            j'aime expérimenter, découvrir et apprendre au fur et à mesure de mes projets professionnels et personnels.</p>
            <div className="about__skills">
                <h2 className="skills__title">Mes compétences :</h2>
                <a href="https://github.com/Antoine-Jo" target="_blank"><img src="https://img.icons8.com/fluency/48/000000/github.png"/></a>
                <div className='skills__logo'>
                    <div className='skill__logo'>
                        <img width='100px' alt="svgHtml" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRTY1MTAwIiBkPSJNNDEsNUg3bDMsMzRsMTQsNGwxNC00TDQxLDVMNDEsNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkY2RDAwIiBkPSJNMjQgOEwyNCAzOS45IDM1LjIgMzYuNyAzNy43IDh6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI0LDI1di00aDguNmwtMC43LDExLjVMMjQsMzUuMXYtNC4ybDQuMS0xLjRsMC4zLTQuNUgyNHogTTMyLjksMTdsMC4zLTRIMjR2NEgzMi45eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik0yNCwzMC45djQuMmwtNy45LTIuNkwxNS43LDI3aDRsMC4yLDIuNUwyNCwzMC45eiBNMTkuMSwxN0gyNHYtNGgtOS4xbDAuNywxMkgyNHYtNGgtNC42TDE5LjEsMTd6Ij48L3BhdGg+PC9zdmc+"/>
                        <h3>HTML</h3>
                    </div>
                    <div className='skill__logo'>
                        <img width='100px' alt="svgCss" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDI3N0JEIiBkPSJNNDEsNUg3bDMsMzRsMTQsNGwxNC00TDQxLDVMNDEsNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDM5QkU1IiBkPSJNMjQgOEwyNCAzOS45IDM1LjIgMzYuNyAzNy43IDh6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTMzLjEgMTNMMjQgMTMgMjQgMTcgMjguOSAxNyAyOC42IDIxIDI0IDIxIDI0IDI1IDI4LjQgMjUgMjguMSAyOS41IDI0IDMwLjkgMjQgMzUuMSAzMS45IDMyLjUgMzIuNiAyMSAzMi42IDIxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik0yNCwxM3Y0aC04LjlsLTAuMy00SDI0eiBNMTkuNCwyMWwwLjIsNEgyNHYtNEgxOS40eiBNMTkuOCwyN2gtNGwwLjMsNS41bDcuOSwyLjZ2LTQuMmwtNC4xLTEuNEwxOS44LDI3eiI+PC9wYXRoPjwvc3ZnPg=="/>
                        <h3>CSS</h3>
                    </div>
                    <div className='skill__logo'>
                        <img width='100px' alt="svgSass" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZjA2MjkyIiBkPSJNMzkuODY3LDI1Ljk1NmMtMS41MzgsMC4wMDgtMi44NywwLjM3Ny0zLjk4NiwwLjkyOGMtMC40MDgtMC44MTUtMC44MjItMS41MzItMC44OTEtMi4wNjUJYy0wLjA4MS0wLjYyMi0wLjE3NS0wLjk5NC0wLjA3Ny0xLjczNWMwLjA5OC0wLjc0MSwwLjUyNy0xLjc5MSwwLjUyMS0xLjg3Yy0wLjAwNi0wLjA3OS0wLjA5Ni0wLjQ1Ni0wLjk4My0wLjQ2MwljLTAuODg3LTAuMDA2LTEuNjQ2LDAuMTcxLTEuNzM1LDAuNDA1Yy0wLjA4OSwwLjIzNC0wLjI2LDAuNzYxLTAuMzY2LDEuMzExYy0wLjE1NSwwLjgwNC0xLjc3MSwzLjY3My0yLjY4OCw1LjE3MwljLTAuMy0wLjU4Ni0wLjU1NS0xLjEwMi0wLjYwOC0xLjUxYy0wLjA4MS0wLjYyMi0wLjE3NS0wLjk5NC0wLjA3Ny0xLjczNWMwLjA5OC0wLjc0MSwwLjUyNy0xLjc5MSwwLjUyMS0xLjg3CWMtMC4wMDYtMC4wNzktMC4wOTYtMC40NTYtMC45ODMtMC40NjNjLTAuODg3LTAuMDA2LTEuNjQ2LDAuMTcxLTEuNzM1LDAuNDA1Yy0wLjA4OSwwLjIzNC0wLjE4NSwwLjc4MS0wLjM2NiwxLjMxMQljLTAuMTgyLDAuNTI5LTIuMzI5LDUuMzE0LTIuODkyLDYuNTU1Yy0wLjI4NywwLjYzMi0wLjUzNiwxLjE0LTAuNzEyLDEuNDg2Yy0wLjAwMS0wLjAwMS0wLjAwMS0wLjAwMi0wLjAwMS0wLjAwMglzLTAuMDExLDAuMDIzLTAuMDI5LDAuMDYyYy0wLjE1MSwwLjI5NS0wLjI0LDAuNDU4LTAuMjQsMC40NThzMC4wMDEsMC4wMDIsMC4wMDMsMC4wMDZjLTAuMTIsMC4yMTctMC4yNDgsMC40MTgtMC4zMTEsMC40MTgJYy0wLjA0NCwwLTAuMTMzLTAuNTc3LDAuMDE5LTEuMzY5YzAuMzItMS42NiwxLjA4Ny00LjI0OCwxLjA4LTQuMzM4Yy0wLjAwNC0wLjA0NiwwLjE0My0wLjQ5Ny0wLjUwMS0wLjczMwljLTAuNjI2LTAuMjI5LTAuODQ5LDAuMTUzLTAuOTA2LDAuMTU0Yy0wLjA1NSwwLjAwMS0wLjA5NiwwLjEzNS0wLjA5NiwwLjEzNXMwLjY5Ny0yLjkxMS0xLjMzLTIuOTExCWMtMS4yNjgsMC0zLjAyNCwxLjM4Ny0zLjg4OSwyLjY0NGMtMC41NDYsMC4yOTgtMS43MTUsMC45MzYtMi45NTQsMS42MTdjLTAuNDc2LDAuMjYyLTAuOTYyLDAuNTI5LTEuNDIzLDAuNzgzCWMtMC4wMzEtMC4wMzUtMC4wNjMtMC4wNjktMC4wOTUtMC4xMDRjLTIuNDU5LTIuNjIzLTcuMDAzLTQuNDc4LTYuODExLTguMDA1YzAuMDctMS4yODIsMC41MTYtNC42NTgsOC43MzMtOC43NTIJYzYuNzMxLTMuMzU0LDEyLjEyLTIuNDMxLDEzLjA1MS0wLjM4NmMxLjMzLDIuOTIzLTIuODgsOC4zNTQtOS44Nyw5LjEzOGMtMi42NjMsMC4yOTktNC4wNjYtMC43MzQtNC40MTUtMS4xMTgJYy0wLjM2Ny0wLjQwNS0wLjQyMi0wLjQyMy0wLjU1OS0wLjM0N2MtMC4yMjMsMC4xMjQtMC4wODIsMC40ODEsMCwwLjY5NGMwLjIwOSwwLjU0MywxLjA2NSwxLjUwNiwyLjUyNSwxLjk4NgljMS4yODUsMC40MjIsNC40MTIsMC42NTMsOC4xOTMtMC44MWM0LjIzNi0xLjYzOCw3LjU0My02LjE5Niw2LjU3MS0xMC4wMDVjLTAuOTg4LTMuODc0LTcuNDEyLTUuMTQ4LTEzLjQ5Mi0yLjk4OAlDMTIuNDQsOS4zMzIsOC41MjMsMTEuMzUsNS43MDYsMTMuOTg0Yy0zLjM0OSwzLjEzMi0zLjg4Myw1Ljg1OS0zLjY2Myw2Ljk5OGMwLjc4Miw0LjA0OCw2LjM2MSw2LjY4NCw4LjU5NSw4LjYzNwljLTAuMTEsMC4wNjEtMC4yMTQsMC4xMTgtMC4zMDgsMC4xN2MtMS4xMiwwLjU1NC01LjM3MywyLjc4LTYuNDM3LDUuMTMxYy0xLjIwNywyLjY2NywwLjE5Miw0LjU4MSwxLjExOCw0LjgzOQljMi44NjksMC43OTgsNS44MTMtMC42MzgsNy4zOTYtMi45OThjMS41ODItMi4zNTksMS4zODktNS40MzIsMC42NjMtNi44MzRjLTAuMDA5LTAuMDE3LTAuMDE5LTAuMDM0LTAuMDI4LTAuMDUyCWMwLjI4OS0wLjE3MSwwLjU4NC0wLjM0NSwwLjg3Ni0wLjUxN2MwLjU3LTAuMzM1LDEuMTMtMC42NDcsMS42MTUtMC45MTFjLTAuMjcyLDAuNzQ0LTAuNDcxLDEuNjM3LTAuNTc0LDIuOTI2CWMtMC4xMjIsMS41MTQsMC40OTksMy40NzEsMS4zMTEsNC4yNDFjMC4zNTgsMC4zMzksMC43ODgsMC4zNDcsMS4wNiwwLjM0N2MwLjk0NSwwLDEuMzc2LTAuNzg2LDEuODUxLTEuNzE2CWMwLjU4Mi0xLjE0LDEuMDk5LTIuNDY4LDEuMDk5LTIuNDY4cy0wLjY0OCwzLjU4NiwxLjExOCwzLjU4NmMwLjY0NCwwLDEuMjkxLTAuODM1LDEuNTgtMS4yNmMwLjAwMSwwLjAwNSwwLjAwMSwwLjAwNywwLjAwMSwwLjAwNwlzMC4wMTctMC4wMjgsMC4wNS0wLjA4M2MwLjA2Ny0wLjEwMiwwLjEwNS0wLjE2NywwLjEwNS0wLjE2N3MwLjAwMS0wLjAwNywwLjAwMy0wLjAxOWMwLjI1OS0wLjQ0OSwwLjgzMy0xLjQ3MywxLjY5My0zLjE2MgljMS4xMTItMi4xODIsMi4xNzgtNC45MTYsMi4xNzgtNC45MTZzMC4wOTksMC42NjgsMC40MjQsMS43NzRjMC4xOTEsMC42NSwwLjU5NywxLjM2OSwwLjkxOCwyLjA1OQljLTAuMjU4LDAuMzU4LTAuNDE2LDAuNTYzLTAuNDE2LDAuNTYzczAuMDAxLDAuMDA0LDAuMDA0LDAuMDExYy0wLjIwNiwwLjI3NC0wLjQzNywwLjU2OS0wLjY3OSwwLjg1NwljLTAuODc4LDEuMDQ1LTEuOTIzLDIuMjM5LTIuMDYzLDIuNTgzYy0wLjE2NSwwLjQwNi0wLjEyNiwwLjcwNCwwLjE5MywwLjk0NWMwLjIzMywwLjE3NSwwLjY0NywwLjIwMywxLjA4LDAuMTc0CWMwLjc4OS0wLjA1MywxLjM0My0wLjI0OSwxLjYxNy0wLjM2OGMwLjQyNy0wLjE1MSwwLjkyNC0wLjM4OCwxLjM5LTAuNzMxYzAuODYxLTAuNjMzLDEuMzgtMS41MzgsMS4zMy0yLjczOAljLTAuMDI4LTAuNjYxLTAuMjM4LTEuMzE2LTAuNTA1LTEuOTM0YzAuMDc4LTAuMTEyLDAuMTU2LTAuMjI2LDAuMjM1LTAuMzRjMS4zNTctMS45ODQsMi40MS00LjE2NCwyLjQxLTQuMTY0CXMwLjA5OSwwLjY2OCwwLjQyNCwxLjc3NGMwLjE2NCwwLjU1OSwwLjQ4OSwxLjE3LDAuNzgxLDEuNzY4Yy0xLjI3NiwxLjAzNy0yLjA2NywyLjI0Mi0yLjM0MiwzLjAzMgljLTAuNTA4LDEuNDYyLTAuMTEsMi4xMjQsMC42MzYsMi4yNzVjMC4zMzgsMC4wNjgsMC44MTYtMC4wODcsMS4xNzUtMC4yMzljMC40NDctMC4xNDgsMC45ODQtMC4zOTUsMS40ODYtMC43NjQJYzAuODYxLTAuNjMzLDEuNjg5LTEuNTE5LDEuNjM5LTIuNzE4Yy0wLjAyMy0wLjU0Ni0wLjE3MS0xLjA4OC0wLjM3Mi0xLjYwOGMxLjA4Mi0wLjQ1MSwyLjQ4Mi0wLjcwMSw0LjI2Ni0wLjQ5MwljMy44MjcsMC40NDcsNC41NzcsMi44MzYsNC40MzQsMy44MzZjLTAuMTQ0LDEtMC45NDYsMS41NS0xLjIxNSwxLjcxNmMtMC4yNjgsMC4xNjYtMC4zNSwwLjIyNC0wLjMyOCwwLjM0NwljMC4wMzMsMC4xNzksMC4xNTcsMC4xNzMsMC4zODYsMC4xMzRjMC4zMTUtMC4wNTMsMi4wMDktMC44MTMsMi4wODItMi42NTlDNDYuMDg5LDI4LjUwOSw0My44NDQsMjUuOTM1LDM5Ljg2NywyNS45NTZ6IE0xMC4zNywzNS45CWMtMS4yNjgsMS4zODMtMy4wMzgsMS45MDUtMy43OTgsMS40NjVjLTAuODItMC40NzUtMC40OTUtMi41MTEsMS4wNi0zLjk3OWMwLjk0OC0wLjg5NCwyLjE3Mi0xLjcxOCwyLjk4NC0yLjIyNQljMC4xODUtMC4xMTEsMC40NTYtMC4yNzQsMC43ODYtMC40NzJjMC4wNTUtMC4wMzEsMC4wODYtMC4wNDgsMC4wODYtMC4wNDhsLTAuMDAxLTAuMDAyYzAuMDY0LTAuMDM4LDAuMTI5LTAuMDc3LDAuMTk2LTAuMTE4CUMxMi4yNSwzMi42MSwxMS43MDEsMzQuNDQ5LDEwLjM3LDM1Ljl6IE0xOS42MDUsMjkuNjIzYy0wLjQ0MSwxLjA3Ni0xLjM2NSwzLjgzLTEuOTI4LDMuNjgyYy0wLjQ4My0wLjEyNy0wLjc3Ny0yLjIyLTAuMDk2LTQuMjgJYzAuMzQyLTEuMDM3LDEuMDc0LTIuMjc2LDEuNTA0LTIuNzU3YzAuNjkyLTAuNzc0LDEuNDU0LTEuMDI3LDEuNjM5LTAuNzEzQzIwLjk1OSwyNS45NTUsMTkuODgyLDI4Ljk0OCwxOS42MDUsMjkuNjIzeiBNMjcuMjM0LDMzLjI2M2MtMC4xODcsMC4wOTgtMC4zNTksMC4xNTktMC40MzgsMC4xMTJjLTAuMDU5LTAuMDM1LDAuMDc3LTAuMTY0LDAuMDc3LTAuMTY0czAuOTU0LTEuMDI3LDEuMzMtMS40OTQJYzAuMjE5LTAuMjcyLDAuNDcyLTAuNTk1LDAuNzQ4LTAuOTU1YzAuMDAyLDAuMDM2LDAuMDAzLDAuMDcyLDAuMDAzLDAuMTA3QzI4Ljk1MiwzMi4wOTksMjcuNzY0LDMyLjkyOSwyNy4yMzQsMzMuMjYzeiBNMzMuMTExLDMxLjkyM2MtMC4xNC0wLjA5OS0wLjExNi0wLjQyLDAuMzQzLTEuNDIxYzAuMTgtMC4zOTMsMC41OTItMS4wNTQsMS4zMDYtMS42ODZjMC4wODMsMC4yNiwwLjEzMywwLjUwOSwwLjEzMiwwLjc0MQlDMzQuODgzLDMxLjEwNSwzMy43NzksMzEuNjgzLDMzLjExMSwzMS45MjN6Ij48L3BhdGg+PC9zdmc+"/>
                        <h3>Sass</h3>
                    </div>
                    <div className='skill__logo'>
                        <img width='100px' alt="svgJs" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZkNjAwIiBkPSJNNiw0MlY2aDM2djM2SDZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDAwMSIgZD0iTTI5LjUzOCAzMi45NDdjLjY5MiAxLjEyNCAxLjQ0NCAyLjIwMSAzLjAzNyAyLjIwMSAxLjMzOCAwIDIuMDQtLjY2NSAyLjA0LTEuNTg1IDAtMS4xMDEtLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtLjgwNy0uMzQ0Yy0yLjMyOS0uOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxIDAtMi40MSAxLjg0NS00LjI0NCA0LjcyOC00LjI0NCAyLjA1MyAwIDMuNTI4LjcxMSA0LjU5MiAyLjU3M2wtMi41MTQgMS42MDdjLS41NTMtLjk4OC0xLjE1MS0xLjM3Ny0yLjA3OC0xLjM3Ny0uOTQ2IDAtMS41NDUuNTk3LTEuNTQ1IDEuMzc3IDAgLjk2NC42IDEuMzU0IDEuOTg1IDEuOTUxbC44MDcuMzQ0QzM2LjQ1MiAyOS42NDUgMzggMzAuODM5IDM4IDMzLjUyMyAzOCAzNi40MTUgMzUuNzE2IDM4IDMyLjY1IDM4Yy0yLjk5OSAwLTQuNzAyLTEuNTA1LTUuNjUtMy4zNjhMMjkuNTM4IDMyLjk0N3pNMTcuOTUyIDMzLjAyOWMuNTA2LjkwNiAxLjI3NSAxLjYwMyAyLjM4MSAxLjYwMyAxLjA1OCAwIDEuNjY3LS40MTggMS42NjctMi4wNDNWMjJoMy4zMzN2MTEuMTAxYzAgMy4zNjctMS45NTMgNC44OTktNC44MDUgNC44OTktMi41NzcgMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OEwxNy45NTIgMzMuMDI5eiI+PC9wYXRoPjwvc3ZnPg=="/>
                        <h3>JavaScript</h3>
                    </div>
                    <div className='skill__logo'>
                        <img width='100px' alt="svgReact" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMjQsMzRDMTEuMSwzNCwxLDI5LjYsMSwyNGMwLTUuNiwxMC4xLTEwLDIzLTEwYzEyLjksMCwyMyw0LjQsMjMsMTBDNDcsMjkuNiwzNi45LDM0LDI0LDM0eiBNMjQsMTYJYy0xMi42LDAtMjEsNC4xLTIxLDhjMCwzLjksOC40LDgsMjEsOHMyMS00LjEsMjEtOEM0NSwyMC4xLDM2LjYsMTYsMjQsMTZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgwZGVlYSIgZD0iTTE1LjEsNDQuNmMtMSwwLTEuOC0wLjItMi42LTAuN0M3LjYsNDEuMSw4LjksMzAuMiwxNS4zLDE5bDAsMGMzLTUuMiw2LjctOS42LDEwLjMtMTIuNGMzLjktMyw3LjQtMy45LDkuOC0yLjUJYzIuNSwxLjQsMy40LDQuOSwyLjgsOS44Yy0wLjYsNC42LTIuNiwxMC01LjYsMTUuMmMtMyw1LjItNi43LDkuNi0xMC4zLDEyLjRDMTkuNyw0My41LDE3LjIsNDQuNiwxNS4xLDQ0LjZ6IE0zMi45LDUuNAljLTEuNiwwLTMuNywwLjktNiwyLjdjLTMuNCwyLjctNi45LDYuOS05LjgsMTEuOWwwLDBjLTYuMywxMC45LTYuOSwyMC4zLTMuNiwyMi4yYzEuNywxLDQuNSwwLjEsNy42LTIuM2MzLjQtMi43LDYuOS02LjksOS44LTExLjkJYzIuOS01LDQuOC0xMC4xLDUuNC0xNC40YzAuNS00LTAuMS02LjgtMS44LTcuOEMzNCw1LjYsMzMuNSw1LjQsMzIuOSw1LjR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgwZGVlYSIgZD0iTTMzLDQ0LjZjLTUsMC0xMi4yLTYuMS0xNy42LTE1LjZDOC45LDE3LjgsNy42LDYuOSwxMi41LDQuMWwwLDBDMTcuNCwxLjMsMjYuMiw3LjgsMzIuNywxOQljMyw1LjIsNSwxMC42LDUuNiwxNS4yYzAuNyw0LjktMC4zLDguMy0yLjgsOS44QzM0LjcsNDQuNCwzMy45LDQ0LjYsMzMsNDQuNnogTTEzLjUsNS44Yy0zLjMsMS45LTIuNywxMS4zLDMuNiwyMi4yCWM2LjMsMTAuOSwxNC4xLDE2LjEsMTcuNCwxNC4yYzEuNy0xLDIuMy0zLjgsMS44LTcuOGMtMC42LTQuMy0yLjUtOS40LTUuNC0xNC40QzI0LjYsOS4xLDE2LjgsMy45LDEzLjUsNS44TDEzLjUsNS44eiI+PC9wYXRoPjxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjQiIGZpbGw9IiM4MGRlZWEiPjwvY2lyY2xlPjwvc3ZnPg=="/>
                        <h3>React</h3>
                    </div>
                    <div className='skill__logo'>
                        <img width='100px' alt="svgRedux" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjN2U1N2MyIiBkPSJNMjMsNGMtNi42MTcsMC0xMiw3LjI3LTEyLDE2LjIwNWMwLDQuODM0LDEuNTgyLDkuMTY5LDQuMDc4LDEyLjEzNkMxNS4wMywzMi41NTQsMTUsMzIuNzczLDE1LDMzCWMwLDEuNjU3LDEuMzQzLDMsMywzczMtMS4zNDMsMy0zcy0xLjM0My0zLTMtM2MtMC4zMTUsMC0wLjYxMiwwLjA2Mi0wLjg5NywwLjE1MkMxNS4yMDYsMjcuNzMxLDE0LDI0LjE3NSwxNCwyMC4yMDUJQzE0LDEyLjkyNCwxOC4wMzcsNywyMyw3YzMuODM3LDAsNy4xMTEsMy41NDcsOC40MDQsOC41MThjMS4xMjIsMC4zNDYsMi4yMzcsMC43ODIsMy4zMywxLjMwOEMzMy41NzksOS41MDgsMjguNzU5LDQsMjMsNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjN2U1N2MyIiBkPSJNMzUuNTA3LDIwLjA4NGMtMy45NDctMi4zOTItOC4zNzQtMy40NDItMTIuMTgyLTIuOTU5QzIyLjc3NSwxNi40NDQsMjEuOTQzLDE2LDIxLDE2CWMtMS42NTcsMC0zLDEuMzQzLTMsM3MxLjM0MywzLDMsM2MxLjI3MiwwLDIuMzUzLTAuNzk1LDIuNzg5LTEuOTEyYzMuMTE4LTAuMzc5LDYuODEyLDAuNTMxLDEwLjE2MywyLjU2MwljNi40MDMsMy44ODEsOS42NywxMC41NjksNy4yODIsMTQuOTExYy0wLjgyNywxLjUwNC0yLjI4NiwyLjU3Mi00LjIxOCwzLjA5Yy0yLjI4NiwwLjYxMS01LjAwNywwLjM5NC03LjcyNy0wLjUyOAljLTAuODM5LDAuNzcyLTEuNzQ5LDEuNDk4LTIuNzI1LDIuMTY4YzIuNTUyLDEuMTE3LDUuMTk2LDEuNzA0LDcuNjY5LDEuNzA0YzEuMjQsMCwyLjQzOC0wLjE0NywzLjU1OS0wLjQ0NwljMi43NDEtMC43MzMsNC44NDEtMi4zMDQsNi4wNzEtNC41NDJDNDcuMDE2LDMzLjI3Niw0My4yNjcsMjQuNzg3LDM1LjUwNywyMC4wODR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzdlNTdjMiIgZD0iTTM1LDI4Ljk5MkMzNSwyNy4zNCwzMy42NTcsMjYsMzIsMjZzLTMsMS4zNC0zLDIuOTkyYzAsMC42NjksMC4yMjgsMS4yODEsMC42LDEuNzc5CWMtMS4yNzksMi44MDItMy43NDQsNS41NjctNy4wNjIsNy41NzhjLTMuODY1LDIuMzQ0LTguMTg1LDMuMjAyLTExLjU1NSwyLjMwMmMtMS45MzItMC41MTgtMy4zOTEtMS41ODYtNC4yMTgtMy4wOQljLTEuNzAyLTMuMDk0LTAuNTIxLTcuMzc2LDIuNjEtMTAuOTg4Yy0wLjMyMy0xLjE0NC0wLjU2Mi0yLjM0LTAuNzA2LTMuNTc1Yy01LjA3LDQuNzk3LTcuMTA5LDExLjMyMy00LjUzMiwxNi4wMDkJYzEuMjMsMi4yMzgsMy4zMywzLjgwOSw2LjA3MSw0LjU0MmMxLjEyMSwwLjMsMi4zMTgsMC40NDcsMy41NTksMC40NDdjMy4zNDYsMCw3LjAwNy0xLjA2OCwxMC4zMjYtMy4wOAljMy44MzYtMi4zMjUsNi42ODMtNS41NzcsOC4yMDktOC45NjJDMzMuODE1LDMxLjgwMSwzNSwzMC41NDEsMzUsMjguOTkyeiI+PC9wYXRoPjwvc3ZnPg=="/>
                        <h3>Redux</h3>
                    </div>
                    <div className='skill__logo'>
                        <img width='100px' alt="svgNode" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMzg4ZTNjIiBkPSJNMTcuMjA0IDE5LjEyMmwtNC45MDcgMi43MTVDMTIuMTEzIDIxLjkzOCAxMiAyMi4xMjYgMTIgMjIuMzI5djUuNDMzYzAgLjIwMy4xMTMuMzkuMjk3LjQ5Mmw0LjkwOCAyLjcxN2MuMTgzLjEwMS40MS4xMDEuNTkzIDBsNC45MDctMi43MTdDMjIuODg3IDI4LjE1MiAyMyAyNy45NjUgMjMgMjcuNzYydi01LjQzM2MwLS4yMDMtLjExMy0uMzktLjI5Ny0uNDkybC00LjkwNi0yLjcxNWMtLjA5Mi0uMDUxLS4xOTUtLjA3Ni0uMjk3LS4wNzYtLjEwMyAwLS4yMDUuMDI1LS4yOTcuMDc2TTQyLjQ1MSAyNC4wMTNsLS44MTguNDUyYy0uMDMxLjAxNy0uMDQ5LjA0OC0uMDQ5LjA4MnYuOTA2YzAgLjAzNC4wMTkuMDY1LjA0OS4wODJsLjgxOC40NTNjLjAzMS4wMTcuMDY4LjAxNy4wOTkgMGwuODE4LS40NTNjLjAzLS4wMTcuMDQ5LS4wNDguMDQ5LS4wODJ2LS45MDZjMC0uMDM0LS4wMTktLjA2NS0uMDUtLjA4MmwtLjgxOC0uNDUyQzQyLjUzNCAyNC4wMDQgNDIuNTE3IDI0IDQyLjUgMjRTNDIuNDY2IDI0LjAwNCA0Mi40NTEgMjQuMDEzIj48L3BhdGg+PHBhdGggZmlsbD0iIzM3NDc0ZiIgZD0iTTM1Ljc1MSwxMy4zNjRsLTIuMzg5LTEuMzMzYy0wLjA3NS0wLjA0Mi0wLjE2Ny0wLjA0MS0wLjI0MSwwLjAwMyBjLTAuMDc0LDAuMDQ0LTAuMTIsMC4xMjMtMC4xMiwwLjIwOUwzMywyMC4yOTVsLTIuMjAzLTEuMjE5QzMwLjcwNSwxOS4wMjUsMzAuNjAyLDE5LDMwLjUsMTljLTAuMTAyLDAtMC4yMDUsMC4wMjUtMC4yOTcsMC4wNzYgaDAuMDAxbC00LjkwNywyLjcxNUMyNS4xMTMsMjEuODkyLDI1LDIyLjA4LDI1LDIyLjI4MnY1LjQzM2MwLDAuMjAzLDAuMTEzLDAuMzksMC4yOTcsMC40OTJsNC45MDgsMi43MTcgYzAuMTgzLDAuMTAxLDAuNDEsMC4xMDEsMC41OTMsMGw0LjkwNy0yLjcxN0MzNS44ODcsMjguMTA2LDM2LDI3LjkxOCwzNiwyNy43MTVWMTMuNzg4QzM2LDEzLjYxMiwzNS45MDQsMTMuNDUsMzUuNzUxLDEzLjM2NHogTTMyLjg2NiwyNi40NThsLTIuMjMsMS4yMzVjLTAuMDgzLDAuMDQ2LTAuMTg2LDAuMDQ2LTAuMjY5LDBsLTIuMjMxLTEuMjM1QzI4LjA1MSwyNi40MTIsMjgsMjYuMzI2LDI4LDI2LjIzNHYtMi40NyBjMC0wLjA5MiwwLjA1MS0wLjE3NywwLjEzNS0wLjIyNGwyLjIzMS0xLjIzNGgtMC4wMDFjMC4wNDItMC4wMjMsMC4wODgtMC4wMzQsMC4xMzUtMC4wMzRjMC4wNDcsMCwwLjA5MywwLjAxMiwwLjEzNSwwLjAzNCBsMi4yMywxLjIzNEMzMi45NDksMjMuNTg3LDMzLDIzLjY3MywzMywyMy43NjV2Mi40N0MzMywyNi4zMjYsMzIuOTQ5LDI2LjQxMiwzMi44NjYsMjYuNDU4eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0xNy4yMDQsMTkuMTIyTDEyLDI3Ljc2MmMwLDAuMjAzLDAuMTEzLDAuMzksMC4yOTcsMC40OTJsNC45MDgsMi43MTcgYzAuMTgzLDAuMTAxLDAuNDEsMC4xMDEsMC41OTMsMEwyMywyMi4zMjljMC0wLjIwMy0wLjExMy0wLjM5LTAuMjk3LTAuNDkybC00LjkwNi0yLjcxNWMtMC4wOTItMC4wNTEtMC4xOTUtMC4wNzYtMC4yOTctMC4wNzYgYy0wLjEwMywwLTAuMjA1LDAuMDI1LTAuMjk3LDAuMDc2Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRjYWY1MCIgZD0iTTE3LjIwNCwxOS4xMjJsLTQuOTA3LDIuNzE1QzEyLjExMywyMS45MzgsMTIsMjIuMTI2LDEyLDIyLjMyOWw1LjIwNCw4LjY0MiBjMC4xODMsMC4xMDEsMC40MSwwLjEwMSwwLjU5MywwbDQuOTA3LTIuNzE3QzIyLjg4NywyOC4xNTIsMjMsMjcuOTY1LDIzLDI3Ljc2MmwtNS4yMDMtOC42NGMtMC4wOTItMC4wNTEtMC4xOTUtMC4wNzYtMC4yOTctMC4wNzYgYy0wLjEwMywwLTAuMjA1LDAuMDI1LTAuMjk3LDAuMDc2Ij48L3BhdGg+PHBhdGggZmlsbD0iIzM3NDc0ZiIgZD0iTTQ3LjcwMyAyMS43OTFsLTQuOTA2LTIuNzE1QzQyLjcwNSAxOS4wMjUgNDIuNjAyIDE5IDQyLjUgMTljLS4xMDIgMC0uMjA1LjAyNS0uMjk3LjA3NmguMDAxbC00LjkwNyAyLjcxNUMzNy4xMTQgMjEuODkyIDM3IDIyLjA4NCAzNyAyMi4yOTR2NS40MTFjMCAuMjA5LjExNC40MDIuMjk3LjUwM2w0LjkwOCAyLjcxN2MuMTg0LjEwMi40MDkuMTAyLjU5MyAwbDIuMjYzLTEuMjUzYy4yMDctLjExNS4yMDYtLjQxMi0uMDAyLS41MjZsLTQuOTI0LTIuNjg3QzQwLjA1MiAyNi40MTIgNDAgMjYuMzI1IDQwIDI2LjIzMXYtMi40NjZjMC0uMDkyLjA1LS4xNzcuMTMtLjIyMWwyLjIzNS0xLjIzNmgtLjAwMWMuMDQyLS4wMjMuMDg4LS4wMzQuMTM1LS4wMzQuMDQ3IDAgLjA5My4wMTIuMTM1LjAzNGwyLjIzNSAxLjIzN2MuMDguMDQ0LjEzLjEyOS4xMy4yMjF2Mi4wMTJjMCAuMDg2LjA0Ni4xNjYuMTIxLjIwOS4wNzUuMDQyLjE2Ny4wNDIuMjQyLS4wMDFsMi4zOTgtMS4zOTNjLjE0OC0uMDg2LjI0LS4yNDUuMjQtLjQxN3YtMS44OEM0OCAyMi4wODUgNDcuODg2IDIxLjg5MiA0Ny43MDMgMjEuNzkxek0xMC43MDMgMjEuNzkxbC00LjkwNi0yLjcxNUM1LjcwNSAxOS4wMjUgNS42MDIgMTkgNS41IDE5Yy0uMTAyIDAtLjIwNS4wMjUtLjI5Ny4wNzZoLjAwMWwtNC45MDcgMi43MTVDLjExNCAyMS44OTIgMCAyMi4wODQgMCAyMi4yOTR2Ny40NjVjMCAuMDg2LjA0Ni4xNjYuMTIxLjIwOS4wNzUuMDQyLjE2Ny4wNDIuMjQyLS4wMDFsMi4zOTgtMS4zOTNDMi45MDkgMjguNDg4IDMgMjguMzI5IDMgMjguMTU3di00LjM5M2MwLS4wOTIuMDUtLjE3Ny4xMy0uMjIxbDIuMjM1LTEuMjM2SDUuMzY1Yy4wNDItLjAyMy4wODgtLjAzNC4xMzUtLjAzNC4wNDcgMCAuMDkzLjAxMi4xMzUuMDM0bDIuMjM1IDEuMjM3QzcuOTUgMjMuNTg4IDggMjMuNjczIDggMjMuNzY1djQuMzkzYzAgLjE3Mi4wOTEuMzMxLjI0LjQxN2wyLjM5OCAxLjM5M2MuMDc1LjA0My4xNjcuMDQzLjI0Mi4wMDFDMTAuOTU0IDI5LjkyNSAxMSAyOS44NDUgMTEgMjkuNzU5di03LjQ2NEMxMSAyMi4wODUgMTAuODg2IDIxLjg5MiAxMC43MDMgMjEuNzkxeiI+PC9wYXRoPjwvc3ZnPg=="/>
                        <h3>NodeJS</h3>
                    </div>
                    <div className='skill__logo'>
                        <img width='100px' alt="svgMongoDb" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjNWQ0MDM3IiBkPSJNNDIsMTcuM0M0MiwzNy44LDI0LDQ0LDI0LDQ0UzYsMzcuOCw2LDE3LjNjMC0yLjUsMC4yLTQuNiwwLjQtNi4zYzAuMy0yLjUsMi00LjUsNC40LTUuMSBDMTMuOSw1LDE4LjgsNCwyNCw0czEwLjEsMSwxMy4zLDEuOWMyLjQsMC42LDQuMSwyLjcsNC40LDUuMUM0MS44LDEyLjcsNDIsMTQuOSw0MiwxNy4zeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Y2FmNTAiIGQ9Ik0yNCw3YzQuOSwwLDkuNSwxLDEyLjUsMS44YzEuMiwwLjMsMiwxLjMsMi4yLDIuNmMwLjIsMS45LDAuMywzLjksMC4zLDUuOWMwLDE1LjYtMTEuNSwyMS45LTE1LDIzLjQgYy0zLjUtMS42LTE1LTcuOS0xNS0yMy40YzAtMiwwLjEtNCwwLjMtNS45YzAuMS0xLjMsMS0yLjMsMi4yLTIuNkMxNC41LDgsMTkuMSw3LDI0LDcgTTI0LDRjLTUuMiwwLTEwLjEsMS0xMy4zLDEuOSBDOC40LDYuNSw2LjYsOC42LDYuNCwxMUM2LjIsMTIuNyw2LDE0LjksNiwxNy4zQzYsMzcuOCwyNCw0NCwyNCw0NHMxOC02LjIsMTgtMjYuN2MwLTIuNS0wLjItNC42LTAuNC02LjNjLTAuMy0yLjUtMi00LjUtNC40LTUuMSBDMzQuMSw1LDI5LjIsNCwyNCw0TDI0LDR6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2RjZWRjOCIgZD0iTTIzIDI4SDI1VjM2SDIzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Y2FmNTAiIGQ9Ik0yNCwxMGMwLDAtNiw1LTYsMTNjMCw1LjIsMy4zLDguNSw1LDEwbDEtM2wxLDNjMS43LTEuNSw1LTQuOCw1LTEwQzMwLDE1LDI0LDEwLDI0LDEweiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM4MWM3ODQiIGQ9Ik0yNCwxMGMwLDAtNiw1LTYsMTNjMCw1LjIsMy4zLDguNSw1LDEwbDEtM1YxMHoiPjwvcGF0aD48L3N2Zz4="/>
                        <h3>MongoDB</h3>
                    </div>
                    <div className='skill__logo'>
                        <img width='100px' alt="svgMySql" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDA3OTZiIiBkPSJNMC4wMDIsMzUuMDQxaDEuOTJ2LTcuMDg1bDIuNjY3LDYuMDU3YzAuMzI5LDAuNzU1LDAuNzc5LDEuMDIyLDEuNjYyLDEuMDIyIHMxLjMxNS0wLjI2NywxLjY0NC0xLjAyMmwyLjY2Ny01LjkwMnY2LjkzaDEuOTJ2LTcuMjU4YzAtMC42OTctMC4yNzctMS4wMzUtMC44NDktMS4yMDljLTEuMzY3LTAuNDMtMi4yODUtMC4wNTktMi43LDAuODcyIGwtMi43MzUsNi4xNmwtMi42NDktNi4xNmMtMC4zOTgtMC45My0xLjMzMi0xLjMwMi0yLjctMC44NzJDMC4yNzcsMjYuNzQ4LDAsMjcuMDg1LDAsMjcuNzgydjcuMjU4SDAuMDAyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDc5NmIiIGQ9Ik0xMy40NDEsMjkuMjgxaDEuOTJ2NC4wNTVjLTAuMDE1LDAuMiwwLjA2NCwwLjczMSwwLjk5LDAuNzQ1YzAuNDcyLDAuMDA4LDIuODIxLDAsMi44NSwwdi00LjhoMS45MiBjMC4wMDgsMCwwLDUuOTY4LDAsNS45OTNjMC4wMSwxLjQ3Mi0xLjgyOCwxLjY2Mi0yLjY3MywxLjY4N2gtNS4wMDZ2LTAuOTZjMC4wMSwwLDQuNzg3LDAuMDAxLDQuODAxLDAgYzEuMDg4LTAuMTE1LDAuOTU5LTAuNzE0LDAuOTU5LTAuODk2di0wLjA2NEgxNi4xOWMtMS42Ny0wLjAxNS0yLjczNS0wLjc1MS0yLjc0Ny0xLjU5QzEzLjQ0MSwzMy4zNzMsMTMuNDc5LDI5LjMxNywxMy40NDEsMjkuMjgxIHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZjU3ZjE3IiBkPSJNMjIuMDgxLDM1LjA0MWg0LjgwN2MwLjYzLDAsMS4yNDItMC4xMzIsMS43MjgtMC4zNmMwLjgxLTAuMzcyLDEuMTQ0LTAuODc1LDEuMTQ0LTEuNTM2di0xLjM2OCBjMC0xLjQ3Ni0xLjgzLTEuNTM2LTIuODgtMS41MzZoLTEuOTJjLTAuNzU1LDAtMC44Ny0wLjQ1Ni0wLjk2LTAuOTZ2LTAuOTZjMC4wOS0wLjM4NCwwLjI1OC0wLjksMC45MjMtMC45NiBjMC43NzMsMCw0LjgzNiwwLDQuODM2LDB2LTAuOTZoLTQuNTY2Yy0wLjc1NSwwLTMuMTE0LDAuMDktMy4xMTQsMS45MnYxLjE4N2MwLDAuODQsMC43MzgsMS41MjQsMi4zNCwxLjY5MiBjMC4xOCwwLjAxMiwwLjM2LDAuMDI0LDAuNTM5LDAuMDI0YzAsMCwxLjg2Ni0wLjAzNiwxLjkyLTAuMDI0YzEuMDgsMCwwLjk2LDAuODQsMC45NiwwLjk2djAuOTZjMCwwLjEzMi0wLjAzLDAuOTYtMC45NzEsMC45NiBjLTAuMDcyLDAtNC43ODksMC00Ljc4OSwwVjM1LjA0MXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZjU3ZjE3IiBkPSJNNDAuMzIsMzMuMDhjMCwxLjE1OSwwLjY1NSwxLjgwOSwyLjM5MiwxLjkzOWMwLjE2MiwwLjAxMSwwLjMyNSwwLjAyMSwwLjQ4OCwwLjAyMUg0OHYtMC45NmgtNC40MzUgYy0wLjk5MSwwLTEuMzI1LTAuNDE2LTEuMzI1LTEuMDExdi02LjY2OWgtMS45MlYzMy4wOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZjU3ZjE3IiBkPSJNMzAuNzA0LDMzLjEyMXYtNC44YzAtMS4wMiwwLjUtMS43MjQsMS45MTYtMS45MmgwLjY3MmgzLjQ0N2gwLjUyNSBjMS40MTYsMC4xOTYsMi4wOCwwLjg5OSwyLjA4LDEuOTJ2NC43ODJjMCwwLjgyNy0wLjIxNSwxLjI3MS0wLjkxNiwxLjU1OUwzOS45MTYsMzZoLTIuMTZsLTEuMDctMC45NmgtMS4yNTdsLTIuMTM2LDAuMDEyIGMtMC4zMDksMC0wLjYzNS0wLjA0My0wLjk5My0wLjE0MUMzMS4yMjYsMzQuNjE4LDMwLjcwNCwzNC4wNTQsMzAuNzA0LDMzLjEyMXogTTMyLjYyNCwzMy4xMjFjMC4wOTgsMC40NjcsMC40NzMsMC45NiwxLjE0LDAuOTYgaDEuODY0bC0xLjA2OC0wLjk2aDIuMTc1bDAuNTE5LDAuNDgyYzAsMCwwLjE4Ni0wLjE1MiwwLjE4Ni0wLjQ4MmMwLTAuMzMtMC4wMTYtNC44LTAuMDE2LTQuOGMtMC4wOTgtMC40MzQtMC41MzgtMC45Ni0xLjE4OC0wLjk2IGgtMi40NzFjLTAuNzQ5LDAtMS4xNCwwLjU0OC0xLjE0LDEuMDU4TDMyLjYyNCwzMy4xMjFMMzIuNjI0LDMzLjEyMXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA3OTZiIiBkPSJNNDYuMTk5LDI1LjM4OWMtMS4wMzEtMC4wMjgtMS44MTgsMC4wNjgtMi40OTEsMC4zNTFjLTAuMTkxLDAuMDgxLTAuNDk2LDAuMDgzLTAuNTI4LDAuMzIzIGMwLjEwNSwwLjExLDAuMTIxLDAuMjc1LDAuMjA1LDAuNDFjMC4xNiwwLjI2LDAuNDMyLDAuNjA5LDAuNjc0LDAuNzkxYzAuMjY1LDAuMiwwLjUzOCwwLjQxNCwwLjgyMSwwLjU4NyBjMC41MDQsMC4zMDcsMS4wNjcsMC40ODMsMS41NTMsMC43OTFjMC4yODYsMC4xODEsMC41NywwLjQxMSwwLjg1LDAuNjE1YzAuMTM4LDAuMTAyLDAuMjMsMC4yNTksMC40MSwwLjMyMyBjMC0wLjAxLDAtMC4wMTksMC0wLjAyOWMtMC4wOTQtMC4xMi0wLjExOS0wLjI4NS0wLjIwNS0wLjQxMWMtMC4xMjctMC4xMjctMC4yNTQtMC4yNTQtMC4zODEtMC4zODEgYy0wLjM3Mi0wLjQ5NC0wLjg0Ni0wLjkyOS0xLjM0OC0xLjI4OWMtMC40MDEtMC4yODgtMS4yOTgtMC42NzctMS40NjYtMS4xNDNjLTAuMDEtMC4wMS0wLjAxOS0wLjAxOS0wLjAzLTAuMDMgYzAuMjg0LTAuMDMyLDAuNjE3LTAuMTM1LDAuODc5LTAuMjA1YzAuNDQxLTAuMTE4LDAuODM0LTAuMDg3LDEuMjg5LTAuMjA1YzAuMjA1LTAuMDU5LDAuNDEtMC4xMTcsMC42MTUtMC4xNzYgYzAtMC4wMzksMC0wLjA3OCwwLTAuMTE3Yy0wLjIzLTAuMjM2LTAuMzk1LTAuNTQ4LTAuNjQ1LTAuNzYyYy0wLjY1Ny0wLjU1OS0xLjM3My0xLjExNy0yLjExLTEuNTgzIGMtMC40MDktMC4yNTgtMC45MTUtMC40MjYtMS4zNDgtMC42NDVjLTAuMTQ2LTAuMDc0LTAuNDAyLTAuMTEyLTAuNDk4LTAuMjM0Yy0wLjIyOC0wLjI5LTAuMzUxLTAuNjU5LTAuNTI3LTAuOTk2IGMtMC4zNjgtMC43MDgtMC43My0xLjQ4Mi0xLjA1NS0yLjIyN2MtMC4yMjMtMC41MDgtMC4zNjgtMS4wMS0wLjY0NS0xLjQ2NmMtMS4zMzEtMi4xODgtMi43NjQtMy41MDktNC45ODItNC44MDcgYy0wLjQ3Mi0wLjI3Ni0xLjA0MS0wLjM4NS0xLjY0Mi0wLjUyOGMtMC4zMjMtMC4wMTktMC42NDUtMC4wMzktMC45NjgtMC4wNTljLTAuMTk3LTAuMDgzLTAuNDAxLTAuMzIzLTAuNTg3LTAuNDQgYy0wLjczNS0wLjQ2NS0yLjYyMS0xLjQ3NS0zLjE2NS0wLjE0N2MtMC4zNDQsMC44MzgsMC41MTQsMS42NTYsMC44MjEsMi4wODFjMC4yMTUsMC4yOTgsMC40OTEsMC42MzIsMC42NDUsMC45NjggYzAuMTAxLDAuMjIsMC4xMTksMC40NDEsMC4yMDUsMC42NzRjMC4yMTMsMC41NzQsMC41NSwxLjIyOCwwLjgyNiwxLjc1OWMwLjEzOSwwLjI2OSwwLjI5MywwLjU1MSwwLjQ2OSwwLjc5MSBjMC4xMDgsMC4xNDcsMC4yOTMsMC4yMTIsMC4zMjMsMC40NGMtMC4xODEsMC4yNTMtMC4xOTEsMC42NDYtMC4yOTMsMC45NjhjLTAuNDU4LDEuNDQ1LTAuMjg1LDMuMjQsMC4zODEsNC4zMDggYzAuMjA0LDAuMzI4LDAuNjg2LDEuMDMyLDEuMzQ4LDAuNzYyYzAuNTc5LTAuMjM2LDAuNDUtMC45NjcsMC42MTUtMS42MTJjMC4wMzctMC4xNDYsMC4wMTQtMC4yNTMsMC4wODgtMC4zNTEgYzAsMC4wMSwwLDAuMDE5LDAsMC4wM2MwLjE3NiwwLjM1MSwwLjM1MSwwLjcwNCwwLjUyOCwxLjA1NWMwLjM5MSwwLjYyOSwxLjA4NCwxLjI4NiwxLjY3LDEuNzMgYzAuMzA0LDAuMjMsMC41NDQsMC42MjgsMC45MzgsMC43NjJjMC0wLjAxLDAtMC4wMTksMC0wLjAzYy0wLjAxLDAtMC4wMTksMC0wLjAzLDBjLTAuMDc2LTAuMTE5LTAuMTk2LTAuMTY4LTAuMjkzLTAuMjY0IGMtMC4yMjktMC4yMjUtMC40ODUtMC41MDQtMC42NzQtMC43NjJjLTAuNTM0LTAuNzI1LTEuMDA2LTEuNTE5LTEuNDM2LTIuMzQ1Yy0wLjIwNS0wLjM5NS0wLjM4NC0wLjgyOS0wLjU1Ny0xLjIzMSBjLTAuMDY3LTAuMTU1LTAuMDY2LTAuMzg5LTAuMjA1LTAuNDY5Yy0wLjE5LDAuMjk0LTAuNDY4LDAuNTMyLTAuNjE1LDAuODc5Yy0wLjIzNCwwLjU1NS0wLjI2NSwxLjIzMy0wLjM1MSwxLjkzNCBjLTAuMDUyLDAuMDE4LTAuMDI5LDAuMDA2LTAuMDU5LDAuMDI5Yy0wLjQwOC0wLjA5OS0wLjU1Mi0wLjUxOC0wLjcwNC0wLjg3OWMtMC4zODQtMC45MTItMC40NTUtMi4zOC0wLjExNy0zLjQyOSBjMC4wODctMC4yNzIsMC40ODItMS4xMjcsMC4zMjMtMS4zNzhjLTAuMDc2LTAuMjUxLTAuMzI4LTAuMzk2LTAuNDY4LTAuNTg3Yy0wLjE3NS0wLjIzNi0wLjM0OC0wLjU0OC0wLjQ2OS0wLjgyMSBjLTAuMzE0LTAuNzExLTAuNjEyLTEuNTM4LTAuOTQzLTIuMjU3Yy0wLjE1OC0wLjM0NC0wLjQyNS0wLjY5MS0wLjY0NS0wLjk5NmMtMC4yNDMtMC4zMzgtMC41MTYtMC41ODctMC43MDQtMC45OTYgYy0wLjA2Ny0wLjE0NS0wLjE1OC0wLjM3OC0wLjA1OS0wLjUyOGMwLjAzMi0wLjEwMSwwLjA3Ni0wLjE0MywwLjE3Ni0wLjE3NmMwLjE3LTAuMTMyLDAuNjQzLDAuMDQzLDAuODIxLDAuMTE3IGMwLjQ3LDAuMTk1LDAuODYyLDAuMzgxLDEuMjYsMC42NDVjMC4xOTEsMC4xMjcsMC4zODQsMC4zNzIsMC42MTUsMC40NGMwLjA4OCwwLDAuMTc2LDAsMC4yNjQsMCBjMC40MTMsMC4wOTUsMC44NzUsMC4wMywxLjI2LDAuMTQ3YzAuNjgyLDAuMjA3LDEuMjkyLDAuNTI5LDEuODQ2LDAuODc5YzEuNjksMS4wNjcsMy4wNzEsMi41ODUsNC4wMTYsNC4zOTcgYzAuMTUyLDAuMjkyLDAuMjE4LDAuNTcsMC4zNTEsMC44NzljMC4yNywwLjYyNCwwLjYxMSwxLjI2NiwwLjg3OSwxLjg3NmMwLjI2OCwwLjYwOSwwLjUzLDEuMjIzLDAuOTA5LDEuNzMgYzAuMiwwLjI2NiwwLjk3LDAuNDA5LDEuMzE5LDAuNTU3YzAuMjQ1LDAuMTA0LDAuNjQ3LDAuMjExLDAuODc5LDAuMzUxYzAuNDQ0LDAuMjY4LDAuODc0LDAuNTg3LDEuMjg5LDAuODc5IEM0NS41MjgsMjQuODAzLDQ2LjE2NywyNS4xMjQsNDYuMTk5LDI1LjM4OXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA3OTZiIiBkPSJNMzMuMDk4LDE0LjIyM2MtMC4yMTUtMC4wMDQtMC4zNjcsMC4wMjMtMC41MjgsMC4wNTljMCwwLjAxLDAsMC4wMTksMCwwLjAzYzAuMDEsMCwwLjAxOSwwLDAuMDMsMCBjMC4xMDMsMC4yMSwwLjI4MywwLjM0NywwLjQxLDAuNTI4YzAuMDk4LDAuMjA1LDAuMTk1LDAuNDEsMC4yOTMsMC42MTVjMC4wMS0wLjAxLDAuMDE5LTAuMDE5LDAuMDI5LTAuMDI5IGMwLjE4MS0wLjEyOCwwLjI2NS0wLjMzMiwwLjI2NC0wLjY0NWMtMC4wNzMtMC4wNzctMC4wODQtMC4xNzMtMC4xNDctMC4yNjRDMzMuMzY1LDE0LjM5NCwzMy4yMDMsMTQuMzI1LDMzLjA5OCwxNC4yMjN6Ij48L3BhdGg+PC9zdmc+"/>
                        <h3>MySQL</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
