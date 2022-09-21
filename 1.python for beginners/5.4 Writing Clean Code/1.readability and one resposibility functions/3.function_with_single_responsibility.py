from datetime import date, timedelta
from other_functions_with_readability import _checkout_book
from other_functions_with_readability import _get_books_lent_todate
from other_functions_with_readability import _is_book_available
from other_functions_with_readability import _is_library_member


def _is_member_eligible_for_lending(member_id):
    max_books_to_lend = 2
    is_eligible = False

    if _is_library_member(member_id):
        books_lent_todate = _get_books_lent_todate(member_id)
        if books_lent_todate < max_books_to_lend:
            is_eligible = True
        else:
            print("User not eligible : Cannot lend more than 2 books")
    else:
        print("User not eligible : User is not a member")
    return is_eligible


def _get_book_return_date():
    lend_time_period = 14
    current_date = date.today()
    return current_date + timedelta(days=14)


def lend_book(member_id, book_id):
    # lend book if only eligible
    if _is_member_eligible_for_lending(member_id):
        if _is_book_available(book_id):
            return_date = _get_book_return_date()
            _checkout_book(book_id, member_id, return_date)
            print("Book lent for member successfully")
        else:
            print("Book not available")


lend_book(12, 15)
