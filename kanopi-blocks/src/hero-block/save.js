import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title, description, imageUrl, buttonText, buttonText2, buttonLink, buttonLink2 } = attributes;

    const sectionBlockProps = useBlockProps.save({ 
        className: 'hero-block'
    });

    return (
        <section {...sectionBlockProps}>
            <div className="hero-block__container">

                <div 
                    className="hero-block__image" 
                    data-aos="fade-right" 
                    data-aos-once="true" 
                    data-aos-duration="1000" 
                    data-aos-easing="ease-out"
                >
                    {imageUrl && <img src={imageUrl} alt="Hero" />}
                </div>

                
                <div 
                    className="hero-block__content"
                    data-aos="fade-left" 
                    data-aos-once="true" 
                    data-aos-duration="1000" 
                    data-aos-easing="ease-out" 
                    data-aos-delay="200" 
                >
                    
                    <RichText.Content 
                        tagName="h2" 
                        className="hero-block__title h1" 
                        value={title} 
                       
                    />
                    <RichText.Content 
                        tagName="p" 
                        className="hero-block__description" 
                        value={description} 
                      
                    />

                    <div 
                        className="hero-block__buttons" 
                    >
                       {/* Button 1 */}
                        {(buttonText || buttonLink) && (
                            <div className="wp-block-button">
                                <a className="hero-block__btn-primary wp-block-button__link" href={buttonLink || "#"}>
                                    <RichText.Content value={buttonText} />
                                </a>
                            </div>
                        )}

                        {/* Button 2 */}
                        {(buttonText2 || buttonLink2) && (
                            <div className="wp-block-button">
                                <a className="hero-block__btn-primary wp-block-button__link" href={buttonLink2 || "#"}>
                                    <RichText.Content value={buttonText2} />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}