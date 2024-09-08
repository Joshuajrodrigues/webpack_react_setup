import clsx from 'clsx';
import React from 'react'

const ContentContainer = ({
    children,
    maxWidth = '1200px',
    as: Component = 'div',
    align = 'left',
    className,
    padding = '16px',
    style,
    ...props
}) => {
    const containerStyles = {
        maxWidth,
        padding,
        margin: align === 'center' ? '0 auto' : '0',
        textAlign: align,
        ...style,
    };
    return (
        <Component className={clsx('content-container', className)} style={containerStyles} {...props}>
            {children}
        </Component>
    )
}

export default ContentContainer