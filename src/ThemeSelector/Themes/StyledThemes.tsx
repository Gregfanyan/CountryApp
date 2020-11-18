import styled from 'styled-components'

export const StyledButton = styled.button`
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.primary};
    backface-visibility: hidden;
    position: relative;
    cursor: pointer;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #6aa;
    border-width: 1px;
    padding: 20px;
    margin-left: 10px;
    box-shadow: 0 2px #999;
    &:active {
        background-color: #3e8e41;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    display: inline-block;
    margin-left: 50px;
    margin: 30px;
`
