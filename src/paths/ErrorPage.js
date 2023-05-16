import book from '../assets/book.png';

const ErrorPage = () => {
  return (
    <div className='errorPage'>
      <img src={book} alt='livre' />
      <p>Oups! Cette page n'éxiste pas.</p>
    </div>
  )
}

export default ErrorPage;