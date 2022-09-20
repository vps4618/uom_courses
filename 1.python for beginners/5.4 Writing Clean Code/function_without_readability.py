from datetime import date, datetime, timedelta
from other_functions_without_readability import _get_book
from other_functions_without_readability import _update_db_book_checkout
from other_functions_without_readability import _check_db_member
from other_functions_without_readability import _check_db_book


def lend_book(m_id, b_id):
    # lend book if only eligible
    if _check_db_member(m_id):
        books = _get_book(m_id)
        if books < 2:
            if _check_db_book(b_id):
                d = date.today()
                return_date = d + timedelta(days=14)
                _update_db_book_checkout(b_id, m_id, return_date)
                print("Book lent for member successfully")
            else:
                print("Book not available")
        else:
            print("Cannot lend more than 2 books")
    else:
        print("Member does not exist")


lend_book(12, 15)
