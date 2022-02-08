import './employers-add-from.css';

const EmployersAddFrom = () => {
    return (
        <div className="app-add-form">
            <h3>Добавте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как уго  зовут" />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default EmployersAddFrom;