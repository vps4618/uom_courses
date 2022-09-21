from datetime import date, timedelta
from sources import _checkout_book
from sources import _get_books_lent_todate
from sources import _is_book_available
from sources import _is_library_member


def _is_member_eligible_for_lending(member_id):
    max_books_to_lend = 2

    if not _is_library_member(member_id):
        print("User not eligible : User is not a member")
        return False

    books_lent_todate = _get_books_lent_todate(member_id)
    if books_lent_todate > max_books_to_lend:
        print("User not eligible : Cannot lend more than 2 books")
        return False

    return True


def _get_book_return_date():
    # ! responsible comments
    # Buisness Rule : Return date is 14 days from the book was lent 
    lend_time_period = 14
    current_date = date.today()
    return current_date + timedelta(days=14)


def lend_book(member_id, book_id):
    # ! responsible comments
    # If the member not eligible, does not proceed further
    if not _is_member_eligible_for_lending(member_id):
        return
    if _is_book_available(book_id):
 
        return_date = _get_book_return_date()
        _checkout_book(book_id, member_id, return_date)
        print("Book lent for member successfully")
    else:
        print("Book not available")


lend_book(12, 15)
