// kanopi-blocks/src/blocks/testimonials/edit.js
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button, Dashicon, TextControl, TextareaControl, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';

import './editor.scss';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const blockProps = useBlockProps( { className: 'kanopi-testimonials-block' } );
	const { title, subtitle, items } = attributes;

    const [ isModalOpen, setIsModalOpen ] = useState( false );

    const openModal = () => setIsModalOpen( true );
    const closeModal = () => setIsModalOpen( false );

    // Function to update a specific item's property
    const updateItem = ( value, index, property ) => {
        const newItems = [...items];
        newItems[index][property] = value;
        setAttributes( { items: newItems } );
    };

    // Function to add a new item
    const addItem = () => {
        setAttributes( {
            items: [
                ...items,
                { icon: 'format-quote', itemTitle: 'New item', itemDescription: 'Brief description of this new item.' }
            ]
        } );
    };

    // Function to remove an item
    const removeItem = ( index ) => {
        const newItems = items.filter( ( item, i ) => i !== index );
        setAttributes( { items: newItems } );
    };

    // Function to move an item up
    const moveItemUp = ( index ) => {
        if ( index === 0 ) return;
        const newItems = [...items];
        const [removed] = newItems.splice( index, 1 );
        newItems.splice( index - 1, 0, removed );
        setAttributes( { items: newItems } );
    };

    // Function to move an item down
    const moveItemDown = ( index ) => {
        if ( index === items.length - 1 ) return;
        const newItems = [...items];
        const [removed] = newItems.splice( index, 1 );
        newItems.splice( index + 1, 0, removed );
        setAttributes( { items: newItems } );
    };

	return (
		<div { ...blockProps }>
            {/* Front-end like preview of the block */}
            <div className="kanopi-testimonials-block__preview">
                <div className="kanopi-testimonials-block__header">
                    {/* Main Title - Editable via RichText for quick edits */}
                    <RichText
                        tagName="h2"
                        value={ title }
                        onChange={ ( newTitle ) => setAttributes( { title: newTitle } ) }
                        placeholder={ __( 'Specialities', 'kanopi-blocks' ) }
                        className="kanopi-testimonials-block__title h1"
                    />
                    {/* Subtitle - Editable via RichText for quick edits */}
                    <RichText
                        tagName="p"
                        value={ subtitle }
                        onChange={ ( newSubtitle ) => setAttributes( { subtitle: newSubtitle } ) }
                        placeholder={ __( 'Enter a short description for this section.', 'kanopi-blocks' ) }
                        className="kanopi-testimonials-block__subtitle"
                    />
                </div>

                <div className="kanopi-testimonials-block__grid">
                    { items.length === 0 && (
                        <p className="kanopi-empty-message">
                            { __( 'No Testimonials added yet. Click "Add item" to add some!', 'kanopi-blocks' ) }
                        </p>
                    )}
                    { items.map( ( item, index ) => (
                        <div key={ index } className="kanopi-speciality-item">
                            <div className="kanopi-speciality-item__icon">
                                <Dashicon icon={ item.icon } />
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

                {/* Overlay / Button to trigger modal */}
                <div className="kanopi-testimonials-block__edit-overlay">
                    <Button
                        isSecondary
                        onClick={ openModal }
                        className="kanopi-edit-button"
                    >
                        { __( 'Edit Items', 'kanopi-blocks' ) }
                    </Button>
                </div>
            </div>

            {/* Modal for editing items */}
            { isModalOpen && (
                <Modal
                    title={ __( 'Edit Items', 'kanopi-blocks' ) }
                    onRequestClose={ closeModal }
                    className="kanopi-specialities-modal"
                >
                    <div className="kanopi-specialities-modal__content">
                        <p className="kanopi-modal-description">
                            { __( 'Manage the individual items below. Use the controls to add, remove, and reorder them.', 'kanopi-blocks' ) }
                        </p>

                        { items.length === 0 && (
                            <p>{ __( 'No Testimonials added yet. Click the button below to add one!', 'kanopi-blocks' ) }</p>
                        )}
                        { items.map( ( item, index ) => (
                            <div key={ index } className="kanopi-speciality-item-editor">
                                <div className="kanopi-speciality-item-editor__controls">
                                    <Button
                                        icon="arrow-up-alt2"
                                        onClick={ () => moveItemUp( index ) }
                                        disabled={ index === 0 }
                                        label={ __( 'Move item up', 'kanopi-blocks' ) }
                                    />
                                    <Button
                                        icon="arrow-down-alt2"
                                        onClick={ () => moveItemDown( index ) }
                                        disabled={ index === items.length - 1 }
                                        label={ __( 'Move item down', 'kanopi-blocks' ) }
                                    />
                                    <Button
                                        icon="trash"
                                        isDestructive
                                        onClick={ () => removeItem( index ) }
                                        label={ __( 'Remove item', 'kanopi-blocks' ) }
                                    />
                                </div>

                                <div className="kanopi-speciality-item-editor__content">
                                    <Dashicon icon={ item.icon } size={ 36 } />
                                    <TextControl
                                        label={ __( 'Icon (Dashicon name)', 'kanopi-blocks' ) }
                                        value={ item.icon }
                                        onChange={ ( newIcon ) => updateItem( newIcon, index, 'icon' ) }
                                    />
                                    <TextControl
                                        label={ __( 'Item Title', 'kanopi-blocks' ) }
                                        value={ item.itemTitle }
                                        onChange={ ( newTitle ) => updateItem( newTitle, index, 'itemTitle' ) }
                                    />
                                    <TextareaControl
                                        label={ __( 'Item Description', 'kanopi-blocks' ) }
                                        value={ item.itemDescription }
                                        onChange={ ( newDescription ) => updateItem( newDescription, index, 'itemDescription' ) }
                                        rows={ 3 }
                                    />
                                </div>
                            </div>
                        ) ) }
                        <Button isPrimary onClick={ addItem } className="kanopi-add-item-button">
                            { __( 'Add New Item', 'kanopi-blocks' ) }
                        </Button>
                    </div>
                </Modal>
            )}
		</div>
	);
}