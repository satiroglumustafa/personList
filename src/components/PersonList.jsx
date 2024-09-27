import { useEffect, useState } from "react"
import PersonListItem from "./PersonListItem"
import { Col, Form, Spinner } from "react-bootstrap"
import PersonListContext from "../contexts/personListContext"


const PersonList = () => {
    const [apiData, setApiData] = useState({ results: [] })
    const [loading, setLoading] = useState(true)
    const [inputValue, setInputValue] = useState('')

    const onChangeFunct = (event) => {
        setInputValue(event.target.value)
    }

    const dataFunct = async () => {
        try {

            const request = await fetch('https://randomuser.me/api/?results=500')
            const jsonResult = await request.json()

            const filteredData = jsonResult.results.filter(person => person.nat === "TR")
            setApiData({ results: filteredData })
            setLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(true)
        }
    }

    useEffect(() => {

        dataFunct()
    }, [])


    if (loading) {
        return (
            <>
                <Col xs={12}>
                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="danger" />
                        <Spinner animation="grow" variant="dark" />
                    </div>
                </Col>
            </>
        )
    }

    return (
        <>
            <Col xs={6} className="mb-3"><h1 className="mb-0">Kişi Listesi</h1></Col>
            <Col xs={6} className="mb-3">
                <div className="d-flex align-items-center justify-content-end">
                    <Form.Control type="text" placeholder="Arama Yapın" value={inputValue} onChange={onChangeFunct} />
                </div>
            </Col>
            {
                apiData.results.map(personList =>
                    <PersonListContext.Provider  key={personList.id.value || personList.email} value={personList}>
                        <PersonListItem  />
                    </PersonListContext.Provider>
                    
                )
                //    apiData.results.map(personList => <PersonListItem  {...personList}  /> )
            }
        </>
    )



}
export default PersonList