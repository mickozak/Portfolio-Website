import React, {component} from 'react'

import Education from './education'
import Experience from './experience'
import Training from './training'
import AdditionalAbilities from './additionalAbilities'

class ResumeRight extends React.Component{
    render () {
        return(
            <div className='resume-right-col-text'>

                <h2>Edukacja</h2>
                <Education
                    startYear={"03.2018"}
                    endYear={"05.2018"}
                    schoolName={"infoShare Academy"}
                    fieldOfStudy={"Junior Frontend Developer"}
                    useTechnology={"Umiejętności: Git, HTML, CSS, JavaScript, React, Material-UI, Ajax, jQuery, Firebase, Bootstrap, Jira, WebStorm, Photoshop, Scrum"}
                />
                <Education
                    startYear={"09.2014"}
                    endYear={"10.2016"}
                    schoolName={"Uniwersytet Marii Curie Skłodowskiej"}
                    department={"Wydział: Nauk Ekonomicznych"}
                    fieldOfStudy={"Kierunek: Zarządzanie"}
                    specialty={"Specjalność: Systemy Informacyjne w Administracji i Biznesie"}
                />
                <Education
                    startYear={"09.2014"}
                    endYear={"10.2016"}
                    schoolName={"Katolicki Uniwersytet Lubelski Jana Pawła II"}
                    department={"Wydział: Matematyki, Informatyki i Architektury Krajobrazu"}
                    fieldOfStudy={"Kierunek: Gospodarka Przestrzenna"}
                />
                <hr style={{borderTop: '2px solid #8230a3'}}/>
                <h2>Doświadczenie</h2>
                <Experience
                    startJob={'03.2018'}
                    endJob={'obecnie'}
                    jobName="Freelancer"
                    jobDescription={[<div><b>Zakres obowiązków:</b><ul><li>tworzenie stron internetowych zgodnie ze współczesnymi standardami,</li><li>administracja stron internetowych,</li><li>marketing oraz grafika użytkowa.</li></ul></div>]}
                />
                <Experience
                    startJob={'02.2017'}
                    endJob={'obecnie'}
                    jobName="Uniwersytet Marii Curie Skłodowskiej - Wykładowca"
                    jobDescription={[<div><b>Zakres obowiązków:</b><ul><li>prowadzenie zajęd dydaktycznych dla studentów z przedmiotów: podstawy grafiki komputerowej z elementami HTML i CSS, podstawy marketingu oraz e-marketing i
                    social media.</li></ul></div>]}
                />
                <Experience
                    startJob={'10.2017'}
                    endJob={'03.2018'}
                    jobName="Piastel - Asystent Projektanta"
                    jobDescription={[<div><b>Zakres obowiązków:</b><ul><li>opracowywanie projektów wykonawczych, kosztorysów prac i specyfikacji
                    materiałowych,</li><li>wykonywanie dokumentacji projektowej sieci telekomunikacyjnych, w zakresie
                    niezbędnym do uzyskania decyzji o pozwoleniu na budowę lub zgłoszenia zamiaru
                    prowadzenia robót budowlanych,</li><li>wykonywanie prac projektowych w programie AutoCad zgodnie z wytycznymi
                    Klienta oraz obowiązującymi przepisami i normami.</li></ul></div>]}
                />
                <Experience
                    startJob={'08.2017'}
                    endJob={'10.2017'}
                    jobName="Hotel Europa - Specjalista ds. marketingu i sprzedaży"
                    jobDescription={[<div><b>Zakres obowiązków:</b><ul><li>paktywne współtworzenie strategii sprzedaży oraz planowanie działao
                    marketingowych,</li><li>przygotowywanie ofert handlowych oraz sprzedaż usług konferencyjnych,
                    noclegowych i gastronomicznych,</li><li>obsługa FB, Google+, Instagram, Wordpress.</li></ul></div>]}
                />
                <hr style={{borderTop: '3px solid #8230a3'}}/>

                <h2>Szkolenia</h2>
                <Training
                    dateTraining={'12.2014'}
                    nameTraining="Zarządzanie Zespołem, Komunikacją i Interesariuszami - szkolenia akredytowane przez Project
                    Management Institute realizowane w PM Experts Sp. z o.o."
                />
                <Training
                    dateTraining={'12.2014'}
                    nameTraining="Negocjacje biznesowe – szkolenie realizowane w House of Skills."
                />
                <Training
                    dateTraining={'12.2014'}
                    nameTraining="Komputerowe wspomaganie projektowania AutoCAD - poziom podstawowy i zaawansowany."
                />
                <hr style={{borderTop: '3px solid #8230a3'}}/>
                <h2>Umiejętności dodatkowe</h2>
                <AdditionalAbilities
                    additionalabilities={[<ul><li>Język angielski – poziom średniozaawansowany – B1,</li><li>AutoCAD</li><li>Photoshop</li><li>Microsoft Office/Open Office,</li><li>Windows/Linux,</li><li>Prawo jazdy kategoria B.</li></ul>]}
                />
                <hr style={{borderTop: '3px solid #8230a3'}}/>
                <h2>Zainteresowania</h2>
                <ul>
                    <li>marketing,</li>
                    <li>sporty sylwetkowe,</li>
                    <li>dietetyka.</li>
                </ul>
            </div>
        )
    }
}

export default ResumeRight