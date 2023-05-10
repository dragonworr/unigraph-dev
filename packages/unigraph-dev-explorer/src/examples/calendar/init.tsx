import { registerDynamicViews } from '../../unigraph-react';
import { TimeFrame, CalendarEvent } from './Calendar';

export const init = () => {
    registerDynamicViews({
        '$/schema/calendar_event': {
            view: CalendarEvent as any,
            query: (uid: string) => `(func: uid(${uid})) {uid
            unigraph.id
            dgraph.type
            type {
                unigraph.id
            }
            _hide
            _value {
                <about> {
                    uid
                    unigraph.id
                    dgraph.type
                    type {
                        unigraph.id
                    }
                    _hide
                    _value {
                        uid
                        unigraph.id
                        dgraph.type
                        type {
                            unigraph.id
                        }
                        _hide
                        _value {
                            uid
                            unigraph.id
                            dgraph.type
                            type {
                                unigraph.id
                            }
                            _hide
                            _value {
                                <text> {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    _value {
                                        uid
                                        unigraph.id
                                        dgraph.type
                                        type {
                                            unigraph.id
                                        }
                                        _hide
                                        _value {
                                            uid
                                            unigraph.id
                                            dgraph.type
                                            type {
                                                unigraph.id
                                            }
                                            _hide
                                            _value {
                                                <text> {
                                                    uid
                                                    unigraph.id
                                                    dgraph.type
                                                    type {
                                                        unigraph.id
                                                    }
                                                    _hide
                                                    _value {
                                                        uid
                                                        unigraph.id
                                                        dgraph.type
                                                        type {
                                                            unigraph.id
                                                        }
                                                        _hide
                                                        _value {
                                                            uid
                                                            unigraph.id
                                                            dgraph.type
                                                            type {
                                                                unigraph.id
                                                            }
                                                            _hide
                                                            _value {
                                                                <text> {
                                                                    uid
                                                                    unigraph.id
                                                                    dgraph.type
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                    _hide
                                                                    _value {
                                                                        uid
                                                                        unigraph.id
                                                                        dgraph.type
                                                                        type {
                                                                            unigraph.id
                                                                        }
                                                                        _hide
                                                                        _value
                                                                        _updatedAt
                                                                        _createdAt
                                                                    }
                                                                }
                                                                <children> {
                                                                    <_value[> {
                                                                        uid
                                                                        unigraph.id
                                                                        dgraph.type
                                                                        type {
                                                                            unigraph.id
                                                                        }
                                                                        _hide
                                                                        _value
                                                                        <_index> {
                                                                            <_value.#i>
                                                                            <_value.#>
                                                                        }
                                                                        <_key>
                                                                    }
                                                                    unigraph.id
                                                                    uid
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                            _updatedAt
                                                            _createdAt
                                                            <_value.%>
                                                        }
                                                        _updatedAt
                                                        _createdAt
                                                    }
                                                }
                                                <children> {
                                                    <_value[> {
                                                        uid
                                                        unigraph.id
                                                        dgraph.type
                                                        type {
                                                            unigraph.id
                                                        }
                                                        _hide
                                                        _value {
                                                            uid
                                                            unigraph.id
                                                            expand(_userpredicate_) {
                                                                uid
                                                                unigraph.id
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_)
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                unigraph.indexes {
                                                                    uid
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                        }
                                                        <_index> {
                                                            <_value.#i>
                                                            <_value.#>
                                                        }
                                                        <_key>
                                                    }
                                                    unigraph.id
                                                    uid
                                                    type {
                                                        unigraph.id
                                                    }
                                                }
                                            }
                                            unigraph.indexes {
                                                uid
                                                expand(_userpredicate_) {
                                                    uid
                                                }
                                            }
                                            _updatedAt
                                            _createdAt
                                            <_value.%>
                                        }
                                        _updatedAt
                                        _createdAt
                                    }
                                }
                                <children> {
                                    <_value[> {
                                        uid
                                        unigraph.id
                                        dgraph.type
                                        type {
                                            unigraph.id
                                        }
                                        _hide
                                        _value {
                                            uid
                                            unigraph.id
                                            expand(_userpredicate_) {
                                                uid
                                                unigraph.id
                                                expand(_userpredicate_) {
                                                    uid
                                                    unigraph.id
                                                    expand(_userpredicate_) {
                                                        uid
                                                        unigraph.id
                                                        expand(_userpredicate_) {
                                                            uid
                                                            unigraph.id
                                                            expand(_userpredicate_) {
                                                                uid
                                                                unigraph.id
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_)
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                unigraph.indexes {
                                                                    uid
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                        }
                                                        unigraph.indexes {
                                                            uid
                                                            expand(_userpredicate_) {
                                                                uid
                                                            }
                                                        }
                                                    }
                                                    unigraph.indexes {
                                                        uid
                                                        expand(_userpredicate_) {
                                                            uid
                                                        }
                                                    }
                                                }
                                                unigraph.indexes {
                                                    uid
                                                    expand(_userpredicate_) {
                                                        uid
                                                    }
                                                }
                                            }
                                            unigraph.indexes {
                                                uid
                                                expand(_userpredicate_) {
                                                    uid
                                                }
                                            }
                                        }
                                        <_index> {
                                            <_value.#i>
                                            <_value.#>
                                        }
                                        <_key>
                                    }
                                    unigraph.id
                                    uid
                                    type {
                                        unigraph.id
                                    }
                                }
                            }
                            unigraph.indexes {
                                uid
                                expand(_userpredicate_) {
                                    uid
                                }
                            }
                            _updatedAt
                            _createdAt
                            <_value.%>
                        }
                        _updatedAt
                        _createdAt
                    }
                }
                <recurrence_rules> {
                    <_value[> {
                        uid
                        unigraph.id
                        dgraph.type
                        type {
                            unigraph.id
                        }
                        _hide
                        <_value.%>
                        <_index> {
                            <_value.#i>
                            <_value.#>
                        }
                        <_key>
                    }
                    unigraph.id
                    uid
                    type {
                        unigraph.id
                    }
                }
                <eventuid> {
                    uid
                    unigraph.id
                    dgraph.type
                    type {
                        unigraph.id
                    }
                    _hide
                    <_value.%>
                }
                <time_frame> {
                    uid
                    unigraph.id
                    dgraph.type
                    type {
                        unigraph.id
                    }
                    _hide
                    _value {
                        uid
                        unigraph.id
                        dgraph.type
                        type {
                            unigraph.id
                        }
                        _hide
                        _value {
                            <name> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                _value {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    _value {
                                        uid
                                        unigraph.id
                                        dgraph.type
                                        type {
                                            unigraph.id
                                        }
                                        _hide
                                        _value {
                                            <text> {
                                                uid
                                                unigraph.id
                                                dgraph.type
                                                type {
                                                    unigraph.id
                                                }
                                                _hide
                                                _value {
                                                    uid
                                                    unigraph.id
                                                    dgraph.type
                                                    type {
                                                        unigraph.id
                                                    }
                                                    _hide
                                                    _value {
                                                        uid
                                                        unigraph.id
                                                        dgraph.type
                                                        type {
                                                            unigraph.id
                                                        }
                                                        _hide
                                                        _value {
                                                            <text> {
                                                                uid
                                                                unigraph.id
                                                                dgraph.type
                                                                type {
                                                                    unigraph.id
                                                                }
                                                                _hide
                                                                _value {
                                                                    uid
                                                                    unigraph.id
                                                                    dgraph.type
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                    _hide
                                                                    _value {
                                                                        uid
                                                                        unigraph.id
                                                                        dgraph.type
                                                                        type {
                                                                            unigraph.id
                                                                        }
                                                                        _hide
                                                                        _value {
                                                                            <text> {
                                                                                uid
                                                                                unigraph.id
                                                                                dgraph.type
                                                                                type {
                                                                                    unigraph.id
                                                                                }
                                                                                _hide
                                                                                _value
                                                                            }
                                                                            <children> {
                                                                                <_value[> {
                                                                                    <_index> {
                                                                                        <_value.#i>
                                                                                        <_value.#>
                                                                                    }
                                                                                    <_key>
                                                                                }
                                                                                unigraph.id
                                                                                uid
                                                                                type {
                                                                                    unigraph.id
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                        _updatedAt
                                                                        _createdAt
                                                                        <_value.%>
                                                                    }
                                                                    _updatedAt
                                                                    _createdAt
                                                                }
                                                            }
                                                            <children> {
                                                                <_value[> {
                                                                    uid
                                                                    unigraph.id
                                                                    dgraph.type
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                    _hide
                                                                    _value {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                            unigraph.id
                                                                            expand(_userpredicate_)
                                                                            unigraph.indexes {
                                                                                uid
                                                                                expand(_userpredicate_) {
                                                                                    uid
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    <_index> {
                                                                        <_value.#i>
                                                                        <_value.#>
                                                                    }
                                                                    <_key>
                                                                }
                                                                unigraph.id
                                                                uid
                                                                type {
                                                                    unigraph.id
                                                                }
                                                            }
                                                        }
                                                        unigraph.indexes {
                                                            uid
                                                            expand(_userpredicate_) {
                                                                uid
                                                            }
                                                        }
                                                        _updatedAt
                                                        _createdAt
                                                        <_value.%>
                                                    }
                                                    _updatedAt
                                                    _createdAt
                                                }
                                            }
                                            <children> {
                                                <_value[> {
                                                    uid
                                                    unigraph.id
                                                    dgraph.type
                                                    type {
                                                        unigraph.id
                                                    }
                                                    _hide
                                                    _value {
                                                        uid
                                                        unigraph.id
                                                        expand(_userpredicate_) {
                                                            uid
                                                            unigraph.id
                                                            expand(_userpredicate_) {
                                                                uid
                                                                unigraph.id
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                            unigraph.id
                                                                            expand(_userpredicate_)
                                                                            unigraph.indexes {
                                                                                uid
                                                                                expand(_userpredicate_) {
                                                                                    uid
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                unigraph.indexes {
                                                                    uid
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                        }
                                                        unigraph.indexes {
                                                            uid
                                                            expand(_userpredicate_) {
                                                                uid
                                                            }
                                                        }
                                                    }
                                                    <_index> {
                                                        <_value.#i>
                                                        <_value.#>
                                                    }
                                                    <_key>
                                                }
                                                unigraph.id
                                                uid
                                                type {
                                                    unigraph.id
                                                }
                                            }
                                        }
                                        unigraph.indexes {
                                            uid
                                            expand(_userpredicate_) {
                                                uid
                                            }
                                        }
                                        _updatedAt
                                        _createdAt
                                        <_value.%>
                                    }
                                    _updatedAt
                                    _createdAt
                                }
                            }
                            <start> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                _value {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    _value {
                                        <all_day> {
                                            uid
                                            unigraph.id
                                            dgraph.type
                                            type {
                                                unigraph.id
                                            }
                                            _hide
                                            <_value.!>
                                        }
                                        <datetime> {
                                            uid
                                            unigraph.id
                                            dgraph.type
                                            type {
                                                unigraph.id
                                            }
                                            _hide
                                            <_value.%dt>
                                        }
                                        <name> {
                                            uid
                                            unigraph.id
                                            dgraph.type
                                            type {
                                                unigraph.id
                                            }
                                            _hide
                                            _value {
                                                uid
                                                unigraph.id
                                                dgraph.type
                                                type {
                                                    unigraph.id
                                                }
                                                _hide
                                                _value {
                                                    uid
                                                    unigraph.id
                                                    dgraph.type
                                                    type {
                                                        unigraph.id
                                                    }
                                                    _hide
                                                    _value {
                                                        <text> {
                                                            uid
                                                            unigraph.id
                                                            dgraph.type
                                                            type {
                                                                unigraph.id
                                                            }
                                                            _hide
                                                            _value {
                                                                uid
                                                                unigraph.id
                                                                dgraph.type
                                                                type {
                                                                    unigraph.id
                                                                }
                                                                _hide
                                                                _value {
                                                                    uid
                                                                    unigraph.id
                                                                    dgraph.type
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                    _hide
                                                                    _value {
                                                                        <text> {
                                                                            uid
                                                                            unigraph.id
                                                                            dgraph.type
                                                                            type {
                                                                                unigraph.id
                                                                            }
                                                                            _hide
                                                                            _value {
                                                                                uid
                                                                                unigraph.id
                                                                                dgraph.type
                                                                                type {
                                                                                    unigraph.id
                                                                                }
                                                                                _hide
                                                                                _value
                                                                                _updatedAt
                                                                                _createdAt
                                                                            }
                                                                        }
                                                                        <children> {
                                                                            <_value[> {
                                                                                uid
                                                                                unigraph.id
                                                                                dgraph.type
                                                                                type {
                                                                                    unigraph.id
                                                                                }
                                                                                _hide
                                                                                _value
                                                                                <_index> {
                                                                                    <_value.#i>
                                                                                    <_value.#>
                                                                                }
                                                                                <_key>
                                                                            }
                                                                            unigraph.id
                                                                            uid
                                                                            type {
                                                                                unigraph.id
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                    _updatedAt
                                                                    _createdAt
                                                                    <_value.%>
                                                                }
                                                                _updatedAt
                                                                _createdAt
                                                            }
                                                        }
                                                        <children> {
                                                            <_value[> {
                                                                uid
                                                                unigraph.id
                                                                dgraph.type
                                                                type {
                                                                    unigraph.id
                                                                }
                                                                _hide
                                                                _value {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                            unigraph.id
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                                unigraph.id
                                                                                expand(_userpredicate_)
                                                                                unigraph.indexes {
                                                                                    uid
                                                                                    expand(_userpredicate_) {
                                                                                        uid
                                                                                    }
                                                                                }
                                                                            }
                                                                            unigraph.indexes {
                                                                                uid
                                                                                expand(_userpredicate_) {
                                                                                    uid
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                <_index> {
                                                                    <_value.#i>
                                                                    <_value.#>
                                                                }
                                                                <_key>
                                                            }
                                                            unigraph.id
                                                            uid
                                                            type {
                                                                unigraph.id
                                                            }
                                                        }
                                                    }
                                                    unigraph.indexes {
                                                        uid
                                                        expand(_userpredicate_) {
                                                            uid
                                                        }
                                                    }
                                                    _updatedAt
                                                    _createdAt
                                                    <_value.%>
                                                }
                                                _updatedAt
                                                _createdAt
                                            }
                                        }
                                        <timezone> {
                                            uid
                                            unigraph.id
                                            dgraph.type
                                            type {
                                                unigraph.id
                                            }
                                            _hide
                                            <_value.%>
                                        }
                                    }
                                    unigraph.indexes {
                                        uid
                                        expand(_userpredicate_) {
                                            uid
                                        }
                                    }
                                    _updatedAt
                                    _createdAt
                                }
                            }
                            <end> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                _value {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    _value {
                                        <all_day> {
                                            uid
                                            unigraph.id
                                            dgraph.type
                                            type {
                                                unigraph.id
                                            }
                                            _hide
                                            <_value.!>
                                        }
                                        <datetime> {
                                            uid
                                            unigraph.id
                                            dgraph.type
                                            type {
                                                unigraph.id
                                            }
                                            _hide
                                            <_value.%dt>
                                        }
                                        <name> {
                                            uid
                                            unigraph.id
                                            dgraph.type
                                            type {
                                                unigraph.id
                                            }
                                            _hide
                                            _value {
                                                uid
                                                unigraph.id
                                                dgraph.type
                                                type {
                                                    unigraph.id
                                                }
                                                _hide
                                                _value {
                                                    uid
                                                    unigraph.id
                                                    dgraph.type
                                                    type {
                                                        unigraph.id
                                                    }
                                                    _hide
                                                    _value {
                                                        <text> {
                                                            uid
                                                            unigraph.id
                                                            dgraph.type
                                                            type {
                                                                unigraph.id
                                                            }
                                                            _hide
                                                            _value {
                                                                uid
                                                                unigraph.id
                                                                dgraph.type
                                                                type {
                                                                    unigraph.id
                                                                }
                                                                _hide
                                                                _value {
                                                                    uid
                                                                    unigraph.id
                                                                    dgraph.type
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                    _hide
                                                                    _value {
                                                                        <text> {
                                                                            uid
                                                                            unigraph.id
                                                                            dgraph.type
                                                                            type {
                                                                                unigraph.id
                                                                            }
                                                                            _hide
                                                                            _value {
                                                                                uid
                                                                                unigraph.id
                                                                                dgraph.type
                                                                                type {
                                                                                    unigraph.id
                                                                                }
                                                                                _hide
                                                                                _value
                                                                                _updatedAt
                                                                                _createdAt
                                                                            }
                                                                        }
                                                                        <children> {
                                                                            <_value[> {
                                                                                uid
                                                                                unigraph.id
                                                                                dgraph.type
                                                                                type {
                                                                                    unigraph.id
                                                                                }
                                                                                _hide
                                                                                _value
                                                                                <_index> {
                                                                                    <_value.#i>
                                                                                    <_value.#>
                                                                                }
                                                                                <_key>
                                                                            }
                                                                            unigraph.id
                                                                            uid
                                                                            type {
                                                                                unigraph.id
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                    _updatedAt
                                                                    _createdAt
                                                                    <_value.%>
                                                                }
                                                                _updatedAt
                                                                _createdAt
                                                            }
                                                        }
                                                        <children> {
                                                            <_value[> {
                                                                uid
                                                                unigraph.id
                                                                dgraph.type
                                                                type {
                                                                    unigraph.id
                                                                }
                                                                _hide
                                                                _value {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                            unigraph.id
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                                unigraph.id
                                                                                expand(_userpredicate_)
                                                                                unigraph.indexes {
                                                                                    uid
                                                                                    expand(_userpredicate_) {
                                                                                        uid
                                                                                    }
                                                                                }
                                                                            }
                                                                            unigraph.indexes {
                                                                                uid
                                                                                expand(_userpredicate_) {
                                                                                    uid
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                <_index> {
                                                                    <_value.#i>
                                                                    <_value.#>
                                                                }
                                                                <_key>
                                                            }
                                                            unigraph.id
                                                            uid
                                                            type {
                                                                unigraph.id
                                                            }
                                                        }
                                                    }
                                                    unigraph.indexes {
                                                        uid
                                                        expand(_userpredicate_) {
                                                            uid
                                                        }
                                                    }
                                                    _updatedAt
                                                    _createdAt
                                                    <_value.%>
                                                }
                                                _updatedAt
                                                _createdAt
                                            }
                                        }
                                        <timezone> {
                                            uid
                                            unigraph.id
                                            dgraph.type
                                            type {
                                                unigraph.id
                                            }
                                            _hide
                                            <_value.%>
                                        }
                                    }
                                    unigraph.indexes {
                                        uid
                                        expand(_userpredicate_) {
                                            uid
                                        }
                                    }
                                    _updatedAt
                                    _createdAt
                                }
                            }
                            <children> {
                                <_value[> {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    _value {
                                        uid
                                        unigraph.id
                                        expand(_userpredicate_) {
                                            uid
                                            unigraph.id
                                            expand(_userpredicate_) {
                                                uid
                                                unigraph.id
                                                expand(_userpredicate_) {
                                                    uid
                                                    unigraph.id
                                                    expand(_userpredicate_) {
                                                        uid
                                                        unigraph.id
                                                        expand(_userpredicate_) {
                                                            uid
                                                            unigraph.id
                                                            expand(_userpredicate_) {
                                                                uid
                                                                unigraph.id
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                            unigraph.id
                                                                            expand(_userpredicate_)
                                                                            unigraph.indexes {
                                                                                uid
                                                                                expand(_userpredicate_) {
                                                                                    uid
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                unigraph.indexes {
                                                                    uid
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                        }
                                                        unigraph.indexes {
                                                            uid
                                                            expand(_userpredicate_) {
                                                                uid
                                                            }
                                                        }
                                                    }
                                                    unigraph.indexes {
                                                        uid
                                                        expand(_userpredicate_) {
                                                            uid
                                                        }
                                                    }
                                                }
                                                unigraph.indexes {
                                                    uid
                                                    expand(_userpredicate_) {
                                                        uid
                                                    }
                                                }
                                            }
                                            unigraph.indexes {
                                                uid
                                                expand(_userpredicate_) {
                                                    uid
                                                }
                                            }
                                        }
                                        unigraph.indexes {
                                            uid
                                            expand(_userpredicate_) {
                                                uid
                                            }
                                        }
                                    }
                                    <_index> {
                                        <_value.#i>
                                        <_value.#>
                                    }
                                    <_key>
                                }
                                unigraph.id
                                uid
                                type {
                                    unigraph.id
                                }
                            }
                        }
                        unigraph.indexes {
                            uid
                            expand(_userpredicate_) {
                                uid
                            }
                        }
                        _updatedAt
                        _createdAt
                    }
                }
                <icaluid> {
                    uid
                    unigraph.id
                    dgraph.type
                    type {
                        unigraph.id
                    }
                    _hide
                    <_value.%>
                }
                <name> {
                    uid
                    unigraph.id
                    dgraph.type
                    type {
                        unigraph.id
                    }
                    _hide
                    _value {
                        uid
                        unigraph.id
                        dgraph.type
                        type {
                            unigraph.id
                        }
                        _hide
                        _value {
                            uid
                            unigraph.id
                            dgraph.type
                            type {
                                unigraph.id
                            }
                            _hide
                            _value {
                                <text> {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    _value {
                                        uid
                                        unigraph.id
                                        dgraph.type
                                        type {
                                            unigraph.id
                                        }
                                        _hide
                                        _value {
                                            uid
                                            unigraph.id
                                            dgraph.type
                                            type {
                                                unigraph.id
                                            }
                                            _hide
                                            _value {
                                                <text> {
                                                    uid
                                                    unigraph.id
                                                    dgraph.type
                                                    type {
                                                        unigraph.id
                                                    }
                                                    _hide
                                                    _value {
                                                        uid
                                                        unigraph.id
                                                        dgraph.type
                                                        type {
                                                            unigraph.id
                                                        }
                                                        _hide
                                                        _value {
                                                            uid
                                                            unigraph.id
                                                            dgraph.type
                                                            type {
                                                                unigraph.id
                                                            }
                                                            _hide
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                            _updatedAt
                                                            _createdAt
                                                            <_value.%>
                                                        }
                                                        _updatedAt
                                                        _createdAt
                                                    }
                                                }
                                                <children> {
                                                    <_value[> {
                                                        uid
                                                        unigraph.id
                                                        dgraph.type
                                                        type {
                                                            unigraph.id
                                                        }
                                                        _hide
                                                        _value {
                                                            uid
                                                            unigraph.id
                                                            expand(_userpredicate_) {
                                                                uid
                                                                unigraph.id
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_)
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                unigraph.indexes {
                                                                    uid
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                        }
                                                        <_index> {
                                                            <_value.#i>
                                                            <_value.#>
                                                        }
                                                        <_key>
                                                    }
                                                    unigraph.id
                                                    uid
                                                    type {
                                                        unigraph.id
                                                    }
                                                }
                                            }
                                            unigraph.indexes {
                                                uid
                                                expand(_userpredicate_) {
                                                    uid
                                                }
                                            }
                                            _updatedAt
                                            _createdAt
                                            <_value.%>
                                        }
                                        _updatedAt
                                        _createdAt
                                    }
                                }
                                <children> {
                                    <_value[> {
                                        uid
                                        unigraph.id
                                        dgraph.type
                                        type {
                                            unigraph.id
                                        }
                                        _hide
                                        _value {
                                            uid
                                            unigraph.id
                                            expand(_userpredicate_) {
                                                uid
                                                unigraph.id
                                                expand(_userpredicate_) {
                                                    uid
                                                    unigraph.id
                                                    expand(_userpredicate_) {
                                                        uid
                                                        unigraph.id
                                                        expand(_userpredicate_) {
                                                            uid
                                                            unigraph.id
                                                            expand(_userpredicate_) {
                                                                uid
                                                                unigraph.id
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_)
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                unigraph.indexes {
                                                                    uid
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                        }
                                                        unigraph.indexes {
                                                            uid
                                                            expand(_userpredicate_) {
                                                                uid
                                                            }
                                                        }
                                                    }
                                                    unigraph.indexes {
                                                        uid
                                                        expand(_userpredicate_) {
                                                            uid
                                                        }
                                                    }
                                                }
                                                unigraph.indexes {
                                                    uid
                                                    expand(_userpredicate_) {
                                                        uid
                                                    }
                                                }
                                            }
                                            unigraph.indexes {
                                                uid
                                                expand(_userpredicate_) {
                                                    uid
                                                }
                                            }
                                        }
                                        <_index> {
                                            <_value.#i>
                                            <_value.#>
                                        }
                                        <_key>
                                    }
                                    unigraph.id
                                    uid
                                    type {
                                        unigraph.id
                                    }
                                }
                            }
                            unigraph.indexes {
                                uid
                                expand(_userpredicate_) {
                                    uid
                                }
                            }
                            _updatedAt
                            _createdAt
                            <_value.%>
                        }
                        _updatedAt
                        _createdAt
                    }
                }
                <location> {
                    uid
                    unigraph.id
                    dgraph.type
                    type {
                        unigraph.id
                    }
                    _hide
                    _value {
                        uid
                        unigraph.id
                        dgraph.type
                        type {
                            unigraph.id
                        }
                        _hide
                        _value {
                            uid
                            unigraph.id
                            dgraph.type
                            type {
                                unigraph.id
                            }
                            _hide
                            _value {
                                <text> {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    _value {
                                        uid
                                        unigraph.id
                                        dgraph.type
                                        type {
                                            unigraph.id
                                        }
                                        _hide
                                        _value {
                                            uid
                                            unigraph.id
                                            dgraph.type
                                            type {
                                                unigraph.id
                                            }
                                            _hide
                                            _value {
                                                <text> {
                                                    uid
                                                    unigraph.id
                                                    dgraph.type
                                                    type {
                                                        unigraph.id
                                                    }
                                                    _hide
                                                    _value {
                                                        uid
                                                        unigraph.id
                                                        dgraph.type
                                                        type {
                                                            unigraph.id
                                                        }
                                                        _hide
                                                        _value {
                                                            uid
                                                            unigraph.id
                                                            dgraph.type
                                                            type {
                                                                unigraph.id
                                                            }
                                                            _hide
                                                            _value {
                                                                <text> {
                                                                    uid
                                                                    unigraph.id
                                                                    dgraph.type
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                    _hide
                                                                    _value {
                                                                        uid
                                                                        unigraph.id
                                                                        dgraph.type
                                                                        type {
                                                                            unigraph.id
                                                                        }
                                                                        _hide
                                                                        _value
                                                                        _updatedAt
                                                                        _createdAt
                                                                    }
                                                                }
                                                                <children> {
                                                                    <_value[> {
                                                                        uid
                                                                        unigraph.id
                                                                        dgraph.type
                                                                        type {
                                                                            unigraph.id
                                                                        }
                                                                        _hide
                                                                        _value
                                                                        <_index> {
                                                                            <_value.#i>
                                                                            <_value.#>
                                                                        }
                                                                        <_key>
                                                                    }
                                                                    unigraph.id
                                                                    uid
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                            _updatedAt
                                                            _createdAt
                                                            <_value.%>
                                                        }
                                                        _updatedAt
                                                        _createdAt
                                                    }
                                                }
                                                <children> {
                                                    <_value[> {
                                                        uid
                                                        unigraph.id
                                                        dgraph.type
                                                        type {
                                                            unigraph.id
                                                        }
                                                        _hide
                                                        _value {
                                                            uid
                                                            unigraph.id
                                                            expand(_userpredicate_) {
                                                                uid
                                                                unigraph.id
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_)
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                unigraph.indexes {
                                                                    uid
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                        }
                                                        <_index> {
                                                            <_value.#i>
                                                            <_value.#>
                                                        }
                                                        <_key>
                                                    }
                                                    unigraph.id
                                                    uid
                                                    type {
                                                        unigraph.id
                                                    }
                                                }
                                            }
                                            unigraph.indexes {
                                                uid
                                                expand(_userpredicate_) {
                                                    uid
                                                }
                                            }
                                            _updatedAt
                                            _createdAt
                                            <_value.%>
                                        }
                                        _updatedAt
                                        _createdAt
                                    }
                                }
                                <children> {
                                    <_value[> {
                                        uid
                                        unigraph.id
                                        dgraph.type
                                        type {
                                            unigraph.id
                                        }
                                        _hide
                                        _value {
                                            uid
                                            unigraph.id
                                            expand(_userpredicate_) {
                                                uid
                                                unigraph.id
                                                expand(_userpredicate_) {
                                                    uid
                                                    unigraph.id
                                                    expand(_userpredicate_) {
                                                        uid
                                                        unigraph.id
                                                        expand(_userpredicate_) {
                                                            uid
                                                            unigraph.id
                                                            expand(_userpredicate_) {
                                                                uid
                                                                unigraph.id
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_)
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                unigraph.indexes {
                                                                    uid
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                        }
                                                        unigraph.indexes {
                                                            uid
                                                            expand(_userpredicate_) {
                                                                uid
                                                            }
                                                        }
                                                    }
                                                    unigraph.indexes {
                                                        uid
                                                        expand(_userpredicate_) {
                                                            uid
                                                        }
                                                    }
                                                }
                                                unigraph.indexes {
                                                    uid
                                                    expand(_userpredicate_) {
                                                        uid
                                                    }
                                                }
                                            }
                                            unigraph.indexes {
                                                uid
                                                expand(_userpredicate_) {
                                                    uid
                                                }
                                            }
                                        }
                                        <_index> {
                                            <_value.#i>
                                            <_value.#>
                                        }
                                        <_key>
                                    }
                                    unigraph.id
                                    uid
                                    type {
                                        unigraph.id
                                    }
                                }
                            }
                            unigraph.indexes {
                                uid
                                expand(_userpredicate_) {
                                    uid
                                }
                            }
                            _updatedAt
                            _createdAt
                            <_value.%>
                        }
                        _updatedAt
                        _createdAt
                    }
                }
                <attendee> {
                    <_value[> {
                        uid
                        unigraph.id
                        dgraph.type
                        type {
                            unigraph.id
                        }
                        _hide
                        _value {
                            <identifier> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                <_value.%>
                            }
                            <person> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                _value {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    _value {
                                        uid
                                        unigraph.id
                                        dgraph.type
                                        type {
                                            unigraph.id
                                        }
                                        _hide
                                        <_value.%>
                                        _updatedAt
                                        _createdAt
                                    }
                                    _updatedAt
                                    _createdAt
                                }
                            }
                        }
                        unigraph.indexes {
                            uid
                            expand(_userpredicate_) {
                                uid
                            }
                        }
                        <_index> {
                            <_value.#i>
                            <_value.#>
                        }
                        <_key>
                    }
                    unigraph.id
                    uid
                    type {
                        unigraph.id
                    }
                }
                <calendar> {
                    uid
                    unigraph.id
                    dgraph.type
                    type {
                        unigraph.id
                    }
                    _hide
                    _value {
                        uid
                        unigraph.id
                        dgraph.type
                        type {
                            unigraph.id
                        }
                        _hide
                        _value {
                            <name> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                _value {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    _value {
                                        uid
                                        unigraph.id
                                        dgraph.type
                                        type {
                                            unigraph.id
                                        }
                                        _hide
                                        _value {
                                            <text> {
                                                uid
                                                unigraph.id
                                                dgraph.type
                                                type {
                                                    unigraph.id
                                                }
                                                _hide
                                                _value {
                                                    uid
                                                    unigraph.id
                                                    dgraph.type
                                                    type {
                                                        unigraph.id
                                                    }
                                                    _hide
                                                    _value {
                                                        uid
                                                        unigraph.id
                                                        dgraph.type
                                                        type {
                                                            unigraph.id
                                                        }
                                                        _hide
                                                        _value {
                                                            <text> {
                                                                uid
                                                                unigraph.id
                                                                dgraph.type
                                                                type {
                                                                    unigraph.id
                                                                }
                                                                _hide
                                                                _value {
                                                                    uid
                                                                    unigraph.id
                                                                    dgraph.type
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                    _hide
                                                                    _value {
                                                                        uid
                                                                        unigraph.id
                                                                        dgraph.type
                                                                        type {
                                                                            unigraph.id
                                                                        }
                                                                        _hide
                                                                        _value {
                                                                            <text> {
                                                                                uid
                                                                                unigraph.id
                                                                                dgraph.type
                                                                                type {
                                                                                    unigraph.id
                                                                                }
                                                                                _hide
                                                                                _value
                                                                            }
                                                                            <children> {
                                                                                <_value[> {
                                                                                    <_index> {
                                                                                        <_value.#i>
                                                                                        <_value.#>
                                                                                    }
                                                                                    <_key>
                                                                                }
                                                                                unigraph.id
                                                                                uid
                                                                                type {
                                                                                    unigraph.id
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                        _updatedAt
                                                                        _createdAt
                                                                        <_value.%>
                                                                    }
                                                                    _updatedAt
                                                                    _createdAt
                                                                }
                                                            }
                                                            <children> {
                                                                <_value[> {
                                                                    uid
                                                                    unigraph.id
                                                                    dgraph.type
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                    _hide
                                                                    _value {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                            unigraph.id
                                                                            expand(_userpredicate_)
                                                                            unigraph.indexes {
                                                                                uid
                                                                                expand(_userpredicate_) {
                                                                                    uid
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    <_index> {
                                                                        <_value.#i>
                                                                        <_value.#>
                                                                    }
                                                                    <_key>
                                                                }
                                                                unigraph.id
                                                                uid
                                                                type {
                                                                    unigraph.id
                                                                }
                                                            }
                                                        }
                                                        unigraph.indexes {
                                                            uid
                                                            expand(_userpredicate_) {
                                                                uid
                                                            }
                                                        }
                                                        _updatedAt
                                                        _createdAt
                                                        <_value.%>
                                                    }
                                                    _updatedAt
                                                    _createdAt
                                                }
                                            }
                                            <children> {
                                                <_value[> {
                                                    uid
                                                    unigraph.id
                                                    dgraph.type
                                                    type {
                                                        unigraph.id
                                                    }
                                                    _hide
                                                    _value {
                                                        uid
                                                        unigraph.id
                                                        expand(_userpredicate_) {
                                                            uid
                                                            unigraph.id
                                                            expand(_userpredicate_) {
                                                                uid
                                                                unigraph.id
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                            unigraph.id
                                                                            expand(_userpredicate_)
                                                                            unigraph.indexes {
                                                                                uid
                                                                                expand(_userpredicate_) {
                                                                                    uid
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                unigraph.indexes {
                                                                    uid
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                        }
                                                        unigraph.indexes {
                                                            uid
                                                            expand(_userpredicate_) {
                                                                uid
                                                            }
                                                        }
                                                    }
                                                    <_index> {
                                                        <_value.#i>
                                                        <_value.#>
                                                    }
                                                    <_key>
                                                }
                                                unigraph.id
                                                uid
                                                type {
                                                    unigraph.id
                                                }
                                            }
                                        }
                                        unigraph.indexes {
                                            uid
                                            expand(_userpredicate_) {
                                                uid
                                            }
                                        }
                                        _updatedAt
                                        _createdAt
                                        <_value.%>
                                    }
                                    _updatedAt
                                    _createdAt
                                }
                            }
                            <location> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                _value {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    _value {
                                        uid
                                        unigraph.id
                                        dgraph.type
                                        type {
                                            unigraph.id
                                        }
                                        _hide
                                        _value {
                                            <text> {
                                                uid
                                                unigraph.id
                                                dgraph.type
                                                type {
                                                    unigraph.id
                                                }
                                                _hide
                                                _value {
                                                    uid
                                                    unigraph.id
                                                    dgraph.type
                                                    type {
                                                        unigraph.id
                                                    }
                                                    _hide
                                                    _value {
                                                        uid
                                                        unigraph.id
                                                        dgraph.type
                                                        type {
                                                            unigraph.id
                                                        }
                                                        _hide
                                                        _value {
                                                            <text> {
                                                                uid
                                                                unigraph.id
                                                                dgraph.type
                                                                type {
                                                                    unigraph.id
                                                                }
                                                                _hide
                                                                _value {
                                                                    uid
                                                                    unigraph.id
                                                                    dgraph.type
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                    _hide
                                                                    _value {
                                                                        uid
                                                                        unigraph.id
                                                                        dgraph.type
                                                                        type {
                                                                            unigraph.id
                                                                        }
                                                                        _hide
                                                                        _value {
                                                                            <text> {
                                                                                uid
                                                                                unigraph.id
                                                                                dgraph.type
                                                                                type {
                                                                                    unigraph.id
                                                                                }
                                                                                _hide
                                                                                _value
                                                                            }
                                                                            <children> {
                                                                                <_value[> {
                                                                                    <_index> {
                                                                                        <_value.#i>
                                                                                        <_value.#>
                                                                                    }
                                                                                    <_key>
                                                                                }
                                                                                unigraph.id
                                                                                uid
                                                                                type {
                                                                                    unigraph.id
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                        _updatedAt
                                                                        _createdAt
                                                                        <_value.%>
                                                                    }
                                                                    _updatedAt
                                                                    _createdAt
                                                                }
                                                            }
                                                            <children> {
                                                                <_value[> {
                                                                    uid
                                                                    unigraph.id
                                                                    dgraph.type
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                    _hide
                                                                    _value {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                            unigraph.id
                                                                            expand(_userpredicate_)
                                                                            unigraph.indexes {
                                                                                uid
                                                                                expand(_userpredicate_) {
                                                                                    uid
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    <_index> {
                                                                        <_value.#i>
                                                                        <_value.#>
                                                                    }
                                                                    <_key>
                                                                }
                                                                unigraph.id
                                                                uid
                                                                type {
                                                                    unigraph.id
                                                                }
                                                            }
                                                        }
                                                        unigraph.indexes {
                                                            uid
                                                            expand(_userpredicate_) {
                                                                uid
                                                            }
                                                        }
                                                        _updatedAt
                                                        _createdAt
                                                        <_value.%>
                                                    }
                                                    _updatedAt
                                                    _createdAt
                                                }
                                            }
                                            <children> {
                                                <_value[> {
                                                    uid
                                                    unigraph.id
                                                    dgraph.type
                                                    type {
                                                        unigraph.id
                                                    }
                                                    _hide
                                                    _value {
                                                        uid
                                                        unigraph.id
                                                        expand(_userpredicate_) {
                                                            uid
                                                            unigraph.id
                                                            expand(_userpredicate_) {
                                                                uid
                                                                unigraph.id
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                            unigraph.id
                                                                            expand(_userpredicate_)
                                                                            unigraph.indexes {
                                                                                uid
                                                                                expand(_userpredicate_) {
                                                                                    uid
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                unigraph.indexes {
                                                                    uid
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                        }
                                                        unigraph.indexes {
                                                            uid
                                                            expand(_userpredicate_) {
                                                                uid
                                                            }
                                                        }
                                                    }
                                                    <_index> {
                                                        <_value.#i>
                                                        <_value.#>
                                                    }
                                                    <_key>
                                                }
                                                unigraph.id
                                                uid
                                                type {
                                                    unigraph.id
                                                }
                                            }
                                        }
                                        unigraph.indexes {
                                            uid
                                            expand(_userpredicate_) {
                                                uid
                                            }
                                        }
                                        _updatedAt
                                        _createdAt
                                        <_value.%>
                                    }
                                    _updatedAt
                                    _createdAt
                                }
                            }
                            <color> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                _value {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    <_value.%>
                                    _updatedAt
                                    _createdAt
                                }
                            }
                            <id> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                <_value.%>
                            }
                            <foreground_color> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                _value {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    <_value.%>
                                    _updatedAt
                                    _createdAt
                                }
                            }
                            <about> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                _value {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    _value {
                                        uid
                                        unigraph.id
                                        dgraph.type
                                        type {
                                            unigraph.id
                                        }
                                        _hide
                                        _value {
                                            <text> {
                                                uid
                                                unigraph.id
                                                dgraph.type
                                                type {
                                                    unigraph.id
                                                }
                                                _hide
                                                _value {
                                                    uid
                                                    unigraph.id
                                                    dgraph.type
                                                    type {
                                                        unigraph.id
                                                    }
                                                    _hide
                                                    _value {
                                                        uid
                                                        unigraph.id
                                                        dgraph.type
                                                        type {
                                                            unigraph.id
                                                        }
                                                        _hide
                                                        _value {
                                                            <text> {
                                                                uid
                                                                unigraph.id
                                                                dgraph.type
                                                                type {
                                                                    unigraph.id
                                                                }
                                                                _hide
                                                                _value {
                                                                    uid
                                                                    unigraph.id
                                                                    dgraph.type
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                    _hide
                                                                    _value {
                                                                        uid
                                                                        unigraph.id
                                                                        dgraph.type
                                                                        type {
                                                                            unigraph.id
                                                                        }
                                                                        _hide
                                                                        _value {
                                                                            <text> {
                                                                                uid
                                                                                unigraph.id
                                                                                dgraph.type
                                                                                type {
                                                                                    unigraph.id
                                                                                }
                                                                                _hide
                                                                                _value
                                                                            }
                                                                            <children> {
                                                                                <_value[> {
                                                                                    <_index> {
                                                                                        <_value.#i>
                                                                                        <_value.#>
                                                                                    }
                                                                                    <_key>
                                                                                }
                                                                                unigraph.id
                                                                                uid
                                                                                type {
                                                                                    unigraph.id
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                        _updatedAt
                                                                        _createdAt
                                                                        <_value.%>
                                                                    }
                                                                    _updatedAt
                                                                    _createdAt
                                                                }
                                                            }
                                                            <children> {
                                                                <_value[> {
                                                                    uid
                                                                    unigraph.id
                                                                    dgraph.type
                                                                    type {
                                                                        unigraph.id
                                                                    }
                                                                    _hide
                                                                    _value {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                            unigraph.id
                                                                            expand(_userpredicate_)
                                                                            unigraph.indexes {
                                                                                uid
                                                                                expand(_userpredicate_) {
                                                                                    uid
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    <_index> {
                                                                        <_value.#i>
                                                                        <_value.#>
                                                                    }
                                                                    <_key>
                                                                }
                                                                unigraph.id
                                                                uid
                                                                type {
                                                                    unigraph.id
                                                                }
                                                            }
                                                        }
                                                        unigraph.indexes {
                                                            uid
                                                            expand(_userpredicate_) {
                                                                uid
                                                            }
                                                        }
                                                        _updatedAt
                                                        _createdAt
                                                        <_value.%>
                                                    }
                                                    _updatedAt
                                                    _createdAt
                                                }
                                            }
                                            <children> {
                                                <_value[> {
                                                    uid
                                                    unigraph.id
                                                    dgraph.type
                                                    type {
                                                        unigraph.id
                                                    }
                                                    _hide
                                                    _value {
                                                        uid
                                                        unigraph.id
                                                        expand(_userpredicate_) {
                                                            uid
                                                            unigraph.id
                                                            expand(_userpredicate_) {
                                                                uid
                                                                unigraph.id
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                            unigraph.id
                                                                            expand(_userpredicate_)
                                                                            unigraph.indexes {
                                                                                uid
                                                                                expand(_userpredicate_) {
                                                                                    uid
                                                                                }
                                                                            }
                                                                        }
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                unigraph.indexes {
                                                                    uid
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                        }
                                                        unigraph.indexes {
                                                            uid
                                                            expand(_userpredicate_) {
                                                                uid
                                                            }
                                                        }
                                                    }
                                                    <_index> {
                                                        <_value.#i>
                                                        <_value.#>
                                                    }
                                                    <_key>
                                                }
                                                unigraph.id
                                                uid
                                                type {
                                                    unigraph.id
                                                }
                                            }
                                        }
                                        unigraph.indexes {
                                            uid
                                            expand(_userpredicate_) {
                                                uid
                                            }
                                        }
                                        _updatedAt
                                        _createdAt
                                        <_value.%>
                                    }
                                    _updatedAt
                                    _createdAt
                                }
                            }
                            <sync_token> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                <_value.%>
                            }
                        }
                        unigraph.indexes {
                            uid
                            expand(_userpredicate_) {
                                uid
                            }
                        }
                        _updatedAt
                        _createdAt
                    }
                }
                <children> {
                    <_value[> {
                        uid
                        unigraph.id
                        dgraph.type
                        type {
                            unigraph.id
                        }
                        _hide
                        _value {
                            uid
                            unigraph.id
                            expand(_userpredicate_) {
                                uid
                                unigraph.id
                                expand(_userpredicate_) {
                                    uid
                                    unigraph.id
                                    expand(_userpredicate_) {
                                        uid
                                        unigraph.id
                                        expand(_userpredicate_) {
                                            uid
                                            unigraph.id
                                            expand(_userpredicate_) {
                                                uid
                                                unigraph.id
                                                expand(_userpredicate_) {
                                                    uid
                                                    unigraph.id
                                                    expand(_userpredicate_) {
                                                        uid
                                                        unigraph.id
                                                        expand(_userpredicate_) {
                                                            uid
                                                            unigraph.id
                                                            expand(_userpredicate_) {
                                                                uid
                                                                unigraph.id
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                    unigraph.id
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                        unigraph.id
                                                                        expand(_userpredicate_)
                                                                        unigraph.indexes {
                                                                            uid
                                                                            expand(_userpredicate_) {
                                                                                uid
                                                                            }
                                                                        }
                                                                    }
                                                                    unigraph.indexes {
                                                                        uid
                                                                        expand(_userpredicate_) {
                                                                            uid
                                                                        }
                                                                    }
                                                                }
                                                                unigraph.indexes {
                                                                    uid
                                                                    expand(_userpredicate_) {
                                                                        uid
                                                                    }
                                                                }
                                                            }
                                                            unigraph.indexes {
                                                                uid
                                                                expand(_userpredicate_) {
                                                                    uid
                                                                }
                                                            }
                                                        }
                                                        unigraph.indexes {
                                                            uid
                                                            expand(_userpredicate_) {
                                                                uid
                                                            }
                                                        }
                                                    }
                                                    unigraph.indexes {
                                                        uid
                                                        expand(_userpredicate_) {
                                                            uid
                                                        }
                                                    }
                                                }
                                                unigraph.indexes {
                                                    uid
                                                    expand(_userpredicate_) {
                                                        uid
                                                    }
                                                }
                                            }
                                            unigraph.indexes {
                                                uid
                                                expand(_userpredicate_) {
                                                    uid
                                                }
                                            }
                                        }
                                        unigraph.indexes {
                                            uid
                                            expand(_userpredicate_) {
                                                uid
                                            }
                                        }
                                    }
                                    unigraph.indexes {
                                        uid
                                        expand(_userpredicate_) {
                                            uid
                                        }
                                    }
                                }
                                unigraph.indexes {
                                    uid
                                    expand(_userpredicate_) {
                                        uid
                                    }
                                }
                            }
                            unigraph.indexes {
                                uid
                                expand(_userpredicate_) {
                                    uid
                                }
                            }
                        }
                        <_index> {
                            <_value.#i>
                            <_value.#>
                        }
                        <_key>
                    }
                    unigraph.id
                    uid
                    type {
                        unigraph.id
                    }
                }
                <organizer> {
                    <_value[> {
                        uid
                        unigraph.id
                        dgraph.type
                        type {
                            unigraph.id
                        }
                        _hide
                        _value {
                            <person> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                _value {
                                    uid
                                    unigraph.id
                                    dgraph.type
                                    type {
                                        unigraph.id
                                    }
                                    _hide
                                    _value {
                                        uid
                                        unigraph.id
                                        dgraph.type
                                        type {
                                            unigraph.id
                                        }
                                        _hide
                                        <_value.%>
                                        _updatedAt
                                        _createdAt
                                    }
                                    _updatedAt
                                    _createdAt
                                }
                            }
                            <identifier> {
                                uid
                                unigraph.id
                                dgraph.type
                                type {
                                    unigraph.id
                                }
                                _hide
                                <_value.%>
                            }
                        }
                        unigraph.indexes {
                            uid
                            expand(_userpredicate_) {
                                uid
                            }
                        }
                        <_index> {
                            <_value.#i>
                            <_value.#>
                        }
                        <_key>
                    }
                    unigraph.id
                    uid
                    type {
                        unigraph.id
                    }
                }
            }
            unigraph.indexes {
                uid
                expand(_userpredicate_) {
                    uid
                }
            }
            _updatedAt
            _createdAt}`,
        },
    });
    registerDynamicViews({ '$/schema/time_frame': TimeFrame as any });
};
