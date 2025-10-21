// kanopi-blocks/src/blocks/testimonials/save.js
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Dashicon } from '@wordpress/components'; // Need Dashicon for frontend output if using it

import './style.scss';


export default function save( { attributes } ) {
	const blockProps = useBlockProps.save( { className: 'kanopi-testimonials-block' } );
	const { title, subtitle, items } = attributes;

	return (
		<div { ...blockProps }>
            <div className="kanopi-testimonials-block__header">
                <RichText.Content
                    tagName="h2"
					data-aos="fade-up" 
                    data-aos-once="true" 
                    data-aos-duration="1000" 
                    data-aos-easing="ease-out"
                    value={ title }
                    className="kanopi-testimonials-block__title h1"
                />
                <RichText.Content
                    tagName="p"
					data-aos="fade-up" 
                    data-aos-once="true" 
                    data-aos-duration="1000" 
                    data-aos-easing="ease-out"
                    value={ subtitle }
                    className="kanopi-testimonials-block__subtitle"
                />
            </div>
			<div className="kanopi-testimonials-block__grid">
				{ items.map( ( item, index ) => (
                    <div key={ index } className="kanopi-speciality-item" 
					data-aos="fade-up" 
                    data-aos-once="true" 
                    data-aos-duration="1000" 
                    data-aos-easing="ease-out"
					>
                        <div className="kanopi-speciality-item__icon">
                            <Dashicon icon={ item.icon } /> {/* Render the Dashicon */}
                        </div>
                        <RichText.Content
                            tagName="h3"
                            value={ item.itemTitle }
                            className="kanopi-speciality-item__title"
                        />
                        <RichText.Content
                            tagName="p"
                            value={ item.itemDescription }
                            className="kanopi-speciality-item__description"
                        />
                    </div>
                ) ) }
			</div>
		</div>
	);
}