import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

FooterPagination.propTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

function FooterPagination(props) {
    const { page, totalPages, onChange } = props;

    return (
        <div className="templates-footer-pagination">
            {page > 1 && <div className="item previous" onClick={() => onChange(page - 1)}></div>}

            {page > 1 && (
                <div className="item" onClick={() => onChange(page - 1)}>
                    {page - 1}
                </div>
            )}

            <div className="item item-selected">{page}</div>

            {page < totalPages && (
                <div className="item" onClick={() => onChange(page + 1)}>
                    {page + 1}
                </div>
            )}

            {page < totalPages && (
                <div className="item next" onClick={() => onChange(page + 1)}></div>
            )}
        </div>
    );
}

export default FooterPagination;
