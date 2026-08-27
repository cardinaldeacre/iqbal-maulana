'use client';

import {useState} from 'react';
import {
	Bold,
	Italic,
	List,
	ListOrdered,
	Quote,
	Code2,
	Heading2,
	Undo2,
	Redo2,
	Link2,
	Unlink,
} from 'lucide-react';

import {EditorContent, useEditor} from '@tiptap/react';

import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';

import {cn} from '@/lib/utils';

type RichTextEditorProps = {
	name: string;
	label: string;
	defaultValue?: string;
	placeholder?: string;
};

export function RichTextEditor({
	name,
	label,
	defaultValue = '',
	placeholder = 'Write something...',
}: RichTextEditorProps) {
	const [content, setContent] = useState(defaultValue);

	const editor = useEditor({
		extensions: [
			StarterKit.configure({link: false}),

			Link.configure({
				openOnClick: false,
				autolink: true,
				linkOnPaste: true,
				HTMLAttributes: {
					class: 'text-charcoal underline underline-offset-4 hover:text-gold',
				},
			}),

			Placeholder.configure({
				placeholder,
			}),
		],

		content: defaultValue,

		immediatelyRender: false,

		onUpdate: ({editor}) => {
			setContent(editor.getHTML());
		},

		editorProps: {
			attributes: {
				class: cn(
					'min-h-56 px-4 py-4',
					'text-sm leading-7 text-charcoal',
					'outline-none, text-charcoal',
					'prose prose-invert max-w-none',
					'prose-headings:text-charcoal',
					'prose-strong:text-charcoal',
					'prose-blockquote:border-gold/30, text-charcoal',
					'prose-blockquote:text-charcoal',
					'prose-code:text-gold-light',
					'prose-li:marker:text-charcoal'
				),
			},
		},
	});

	if (!editor) {
		return null;
	}

	const setLink = () => {
		const previousUrl = editor.getAttributes('link').href ?? '';

		const url = window.prompt('Enter URL', previousUrl);

		if (url === null) {
			return;
		}

		if (url === '') {
			editor.chain().focus().extendMarkRange('link').unsetLink().run();

			return;
		}

		editor
			.chain()
			.focus()
			.extendMarkRange('link')
			.setLink({
				href: url,
			})
			.run();
	};

	return (
		<div className="space-y-2">
			<label className="text-sm font-medium text-surface">{label}</label>

			<div />
			<input type="hidden" name={name} value={content} readOnly />

			<div
				className="
                    overflow-hidden
                    rounded-2xl
                    border border-white/10
                    bg-sand-light
                    transition
                    focus-within:border-gold/30
                    focus-within:ring-2
                    focus-within:ring-gold/10
                ">
				<div
					className="
                        flex flex-wrap
                        items-center gap-1
                        border-b border-white/10
                        bg-charcoal/70
                        p-2
                    ">
					<ToolbarButton
						active={editor.isActive('bold')}
						onClick={() => editor.chain().focus().toggleBold().run()}
						title="Bold">
						<Bold className="size-4" />
					</ToolbarButton>

					<ToolbarButton
						active={editor.isActive('italic')}
						onClick={() => editor.chain().focus().toggleItalic().run()}
						title="Italic">
						<Italic className="size-4" />
					</ToolbarButton>

					<Divider />

					<ToolbarButton
						active={editor.isActive('heading', {level: 2})}
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleHeading({
									level: 2,
								})
								.run()
						}
						title="Heading">
						<Heading2 className="size-4" />
					</ToolbarButton>

					<ToolbarButton
						active={editor.isActive('bulletList')}
						onClick={() => editor.chain().focus().toggleBulletList().run()}
						title="Bullet list">
						<List className="size-4" />
					</ToolbarButton>

					<ToolbarButton
						active={editor.isActive('orderedList')}
						onClick={() => editor.chain().focus().toggleOrderedList().run()}
						title="Numbered list">
						<ListOrdered className="size-4" />
					</ToolbarButton>

					<ToolbarButton
						active={editor.isActive('blockquote')}
						onClick={() => editor.chain().focus().toggleBlockquote().run()}
						title="Blockquote">
						<Quote className="size-4" />
					</ToolbarButton>

					<ToolbarButton
						active={editor.isActive('codeBlock')}
						onClick={() => editor.chain().focus().toggleCodeBlock().run()}
						title="Code block">
						<Code2 className="size-4" />
					</ToolbarButton>

					<Divider />

					<ToolbarButton active={editor.isActive('link')} onClick={setLink} title="Add link">
						<Link2 className="size-4" />
					</ToolbarButton>

					<ToolbarButton
						disabled={!editor.isActive('link')}
						onClick={() => editor.chain().focus().unsetLink().run()}
						title="Remove link">
						<Unlink className="size-4" />
					</ToolbarButton>

					<div className="ml-auto flex items-center gap-1">
						<ToolbarButton
							disabled={!editor.can().undo()}
							onClick={() => editor.chain().focus().undo().run()}
							title="Undo">
							<Undo2 className="size-4" />
						</ToolbarButton>

						<ToolbarButton
							disabled={!editor.can().redo()}
							onClick={() => editor.chain().focus().redo().run()}
							title="Redo">
							<Redo2 className="size-4" />
						</ToolbarButton>
					</div>
				</div>

				<EditorContent editor={editor} />
			</div>
		</div>
	);
}

type ToolbarButtonProps = {
	active?: boolean;
	disabled?: boolean;
	onClick: () => void;
	title: string;
	children: React.ReactNode;
};

function ToolbarButton({active, disabled, onClick, title, children}: ToolbarButtonProps) {
	return (
		<button
			type="button"
			title={title}
			disabled={disabled}
			onClick={onClick}
			className={cn(
				'inline-flex size-9 items-center justify-center',
				'rounded-lg',
				'text-white/55',
				'transition',
				'hover:bg-white/5 hover:text-white',
				'disabled:pointer-events-none disabled:opacity-25',
				active && 'bg-gold/15 text-charcoal hover:bg-gold/20 hover:text-white'
			)}>
			{children}
		</button>
	);
}

function Divider() {
	return <span className="mx-1 h-5 w-px bg-white/10" />;
}
