function SectionTitle(props) {
  return (
    <div className='section-title-container'>
      <h2 className='section-title gradient-text'>{props.children}</h2>
      {/* <hr className="underline" /> */}
    </div>
  );
}

export default SectionTitle;
