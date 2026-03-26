import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
} from '@/components/ui/select';
import { FieldType } from '.';
export const renderField = (field: FieldType) => {
    switch (field.type) {
        case 'number':
            return (
                <div className="text-white">
                    <Field key={field.id}>
                        <Input
                            type="number"
                            id={field.id}
                            required={field.required}
                        />
                    </Field>
                </div>
            );

        case 'email':
            return (
                <div className="text-white">
                    <Field key={field.id}>
                        <Input
                            type="email"
                            id={field.id}
                            required={field.required}
                        />
                    </Field>
                </div>
            );

        case 'date':
            return (
                <div className="text-white">
                    <Field key={field.id}>
                        <Input
                            type="date"
                            id={field.id}
                            required={field.required}
                        />
                    </Field>
                </div>
            );

        case 'text':
            return (
                <div>
                    <Field key={field.id}>
                        <Input
                            type="text"
                            id={field.id}
                            required={field.required}
                        />
                    </Field>
                </div>
            );
        case 'file':
            return (
                <div className="text-white">
                    <Field key={field.id}>
                        <Input
                            type="file"
                            id={field.id}
                            required={field.required}
                        />
                    </Field>
                </div>
            );

        case 'checkbox':
            return (
                <Field key={field.id} orientation="horizontal">
                    <Checkbox id={field.id} />
                    <FieldLabel htmlFor={field.id} className="font-normal">
                        {field.label}
                    </FieldLabel>
                </Field>
            );

        case 'radio':
            return (
                <Field key={field.id}>
                    <div className="flex flex-col gap-2">
                        {field.options?.map((option) => (
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name={field.id}
                                    value={option}
                                    className="h-4 w-4 text-white"
                                />
                                <span className="text-white">{option}</span>
                            </div>
                        ))}
                    </div>
                </Field>
            );
        default:
            return null;
    }
};
