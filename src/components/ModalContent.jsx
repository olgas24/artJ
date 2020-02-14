import React from "react";

export class ModalContent extends React.Component {

    state = {
        showConfirmation: false
    };

    handleOpenConfirmation = () => {
        this.setState({showConfirmation: true});

    };

    render() {
        const {data, handleCloseModal} = this.props;
        const {showConfirmation} = this.state;

        return (
            <div className="modal-background">
                {
                    showConfirmation
                        ? <div className="modal-content">
                            <h2>Приглашение отправлено</h2>
                            <span className="btn-confirm" onClick={handleCloseModal}>OK</span>
                        </div>
                        : <div className="modal-content">
                            <h2>Вы действительно хотите пригласить на свидание пользователя с id = {data.id} ?</h2>
                            <span className="btn-submit" onClick={this.handleOpenConfirmation}>Да</span>
                            <span className="btn-close" onClick={handleCloseModal}>Нет</span>
                        </div>
                }

            </div>
        )
    }
}
