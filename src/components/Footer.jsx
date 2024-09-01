export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>© 2023-{currentYear} Mihail Shterev. All Rights Reserved.</div>
  )
}
