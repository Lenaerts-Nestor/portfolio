import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SwitcherButton = styled(motion.button)`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.25rem; /* p-1 */
  border-radius: 9999px; /* rounded-full */
  background-color: ${(props) => props.theme.colors.gray[100]};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[200]};
  }
`;

export const SwitcherContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 2.25rem; /* h-9 */
  padding-left: 0.25rem; /* px-1 */
  padding-right: 0.25rem;
`;

export const SwitcherSlider = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 9999px; /* rounded-full */
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow.sm};
  border: 1px solid ${(props) => props.theme.colors.slate[200]};
`;

export const LanguageOptions = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem; /* space-x-3 */
  width: 100px; /* w-[100px] */
`;

export const LanguageOption = styled.span<{ isActive: boolean }>`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.indigo[600]
      : props.theme.colors.gray[500]};
  transition: color 0.2s;
  padding: 0.25rem 0.75rem; /* px-3 py-1 */
`;
