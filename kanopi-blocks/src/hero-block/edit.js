import { useBlockProps, MediaUpload, RichText, URLInputButton } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { title, description, imageUrl, buttonText, buttonText2, buttonLink, buttonLink2 } = attributes;

    const blockProps = useBlockProps({ className: 'hero-block ' });

    const onSelectMedia = (media) => {
        setAttributes({ imageUrl: media.url });
    };

    const onRemoveMedia = () => {
        setAttributes({ imageUrl: '' }); 
    };

    return (
        <section {...blockProps}>
            <div className="hero-block__container">

                {/* Left Image Area */}
                <div className="hero-block__image">
                    {imageUrl ? (
                        <div className="hero-block__image-preview">
                            <img src={imageUrl} alt="Hero" />
                            <Button onClick={onRemoveMedia} isDestructive className="hero-block__remove-image-button">
                                Remove Image
                            </Button>
                        </div>
                    ) : (
                        <MediaUpload
                            onSelect={onSelectMedia}
                            type="image"
                            value={imageUrl}
                            render={({ open }) => (
                                <Button onClick={open} className="button button-large">
                                    Upload Image
                                </Button>
                            )}
                        />
                    )}
                </div>

                {/* Right Content */}
                <div className="hero-block__content">
                    <RichText
                        tagName="h2"
                        className="hero-block__title h1"
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder="Heading"
                    />

                    <RichText
                        tagName="p"
                        className="hero-block__description"
                        value={description}
                        onChange={(value) => setAttributes({ description: value })}
                        placeholder="Enter a short intro..."
                    />

                    <div className="hero-block__buttons">
                        {/* Button 1 */}
                        <div className="hero-block__btn-item wp-block-button">
                            <RichText
                                tagName="a"
                                className="hero-block__btn-primary wp-block-button__link"
                                value={buttonText}
                                onChange={(value) => setAttributes({ buttonText: value })}
                                placeholder="Button 1"
                            />
                            <URLInputButton
                                url={buttonLink}
                                onChange={(newUrl) => setAttributes({ buttonLink: newUrl })}
                                className="hero-block__link-input-button"
                            />
                        </div>

                        {/* Button 2 */}
                        <div className="hero-block__btn-item wp-block-button">
                            <RichText
                                tagName="a"
                                className="hero-block__btn-primary wp-block-button__link"
                                value={buttonText2}
                                onChange={(value) => setAttributes({ buttonText2: value })}
                                placeholder="Button 2"
                            />
                            <URLInputButton
                                url={buttonLink2}
                                onChange={(newUrl) => setAttributes({ buttonLink2: newUrl })}
                                className="hero-block__link-input-button"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}